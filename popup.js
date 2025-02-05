document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clean-url");
    if (button) {
        button.addEventListener("click", async () => {
            try {
                console.log("Extension button clicked");
                const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
                
                console.log("Current tab:", tab.url);

                // Check if it's an AWS Console URL before proceeding
                if (!tab.url.includes('console.aws.amazon.com')) {
                    throw new Error('This extension only works on AWS Console URLs');
                }
                
                const results = await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: () => {
                        const url = window.location.href;
                        console.log("Content script executing");
                        console.log("Original URL:", url);
                        
                        // Parse the URL
                        const urlObj = new URL(url);
                        
                        // Check if this is an AWS console URL
                        if (!urlObj.hostname.includes('console.aws.amazon.com')) {
                            throw new Error('Not an AWS Console URL');
                        }
                        
                        // Create clean URL
                        const cleanedUrl = new URL(url);
                        cleanedUrl.hostname = 'console.aws.amazon.com';
                        
                        // Remove session ID if present
                        const searchParams = new URLSearchParams(cleanedUrl.search);
                        searchParams.delete('sessionId');
                        cleanedUrl.search = searchParams.toString();
                        
                        console.log("Cleaned URL:", cleanedUrl.toString());
                        return cleanedUrl.toString();
                    }
                });

                const cleanedUrl = results[0].result;
                console.log("Result from content script:", cleanedUrl);
                await navigator.clipboard.writeText(cleanedUrl);
                alert("Cleaned AWS URL copied to clipboard:\n" + cleanedUrl);
                window.close();
            } catch (err) {
                console.error("Error:", err);
                alert(err.message || "This extension only works on AWS Console URLs");
                window.close();
            }
        });
    } else {
        console.error("Button element not found.");
    }
});
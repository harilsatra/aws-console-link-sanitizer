function cleanAwsUrl() {
    console.log("cleanAwsUrl function started");
    let url = window.location.href;
    console.log("Current URL:", url);
    
    let cleanedUrl = url.replace(/https:\/\/\d{12}\.console\.aws\.amazon\.com\//, "https://console.aws.amazon.com/")
                        .replace(/sessionId=[^&]+&?/g, "")
                        .replace(/\?$/, "");
    
    console.log("Cleaned URL:", cleanedUrl);
    
    return navigator.clipboard.writeText(cleanedUrl)
        .then(() => {
            console.log("Successfully copied to clipboard");
            alert("Cleaned AWS URL copied to clipboard:\n" + cleanedUrl);
        })
        .catch(err => {
            console.error("Failed to copy URL: ", err);
            alert("Failed to copy URL: " + err.message);
        });
}

// Execute the function when the script is injected
console.log("Content script loaded");
cleanAwsUrl();

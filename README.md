# AWS Console URL Sanitizer

A Chrome extension that converts AWS Console URLs from account-specific formats into generic, shareable links. This is particularly useful when you need to share AWS Console links with team members who are accessing AWS through different accounts or roles, especially when AWS multi-session support is enabled.

## Features

- Converts account-specific AWS Console URLs to generic formats
- Cleans URLs generated when AWS multi-session support is enabled
- Removes session IDs and other temporary parameters
- Works with one click
- Automatically copies the cleaned URL to clipboard
- Maintains all relevant path and query parameters (like region)

## Examples

When AWS multi-session support is enabled, your URLs look like this:

https://123456789012-abcdef.us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2&sessionId=123-456-789

The extension converts them to shareable URLs:

https://console.aws.amazon.com/lambda/home?region=us-west-2

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the directory containing the extension files

## Usage

1. Navigate to any AWS Console page (works with multi-session enabled URLs)
2. Click the extension icon in your Chrome toolbar
3. The URL will be automatically cleaned and copied to your clipboard
4. Paste the cleaned URL anywhere you need to share it

## Files

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup UI
- `popup.js` - Popup interaction logic
- `content.js` - URL cleaning logic
- `background.js` - Background service worker

## Permissions

This extension requires the following permissions:
- `tabs` - To access the current tab's URL
- `activeTab` - To execute scripts in the current tab
- `scripting` - To run the URL cleaning script
- `clipboardWrite` - To copy the cleaned URL
- `clipboard` - To access clipboard functionality

## Contributing

Feel free to submit issues and enhancement requests!

## License

Copyright (c) 2024 Haril

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive license that allows you to:
- Use the software commercially
- Modify the software
- Distribute the software
- Use and modify the software privately

The only requirement is that the license and copyright notice must be included with the software.



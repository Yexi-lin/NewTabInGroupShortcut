# New Tab in Group Shortcut Extension

<div align="right">
  <a href="README.md">English</a> | 
  <a href="README_zh.md">中文</a>
</div>

Powered by Claude3.7 and DeepseekV3.
This is a Microsoft Edge browser extension that allows users to open a new tab within the current tab group using a custom keyboard shortcut.

## Features

- Use a keyboard shortcut (default: `Ctrl+Shift+G`) to open a new tab in the current tab group
- If the current tab is not in a group, a regular new tab will be created
- Clean popup interface with usage instructions

## Installation

### Developer Mode Installation

1. Download or clone this repository to your local machine
2. Generate icon files
   - Open the `create_icons.html` file
   - Follow the instructions on the page to download icons and place them in the `icons` folder
3. Open `edge://extensions/` in your Edge browser
4. Enable "Developer mode" in the top-right corner
5. Click "Load unpacked"
6. Select the folder containing this extension

## Usage

1. Add tabs to a group
   - Right-click on a tab
   - Select "Add to new group" or "Add to existing group"
2. Press the shortcut key on any tab within the group
3. A new tab will be automatically created and added to the current group

## Customizing the Shortcut

1. Open `edge://extensions/shortcuts` in your Edge browser
2. Find the "New Tab in Group Shortcut" extension
3. Click the input field and set your desired shortcut combination

## File Structure

- `manifest.json` - Configuration file for the extension
- `background.js` - Background script that handles shortcuts and tab operations
- `popup.html` - HTML file for the popup window
- `popup.js` - JavaScript file for the popup window
- `icons/` - Folder containing extension icons
- `create_icons.html` - Tool for generating icons

## Technical Details

This extension is developed using the Manifest V3 specification and utilizes the following Chrome extension APIs:

- `chrome.commands` - For registering and handling shortcuts
- `chrome.tabs` - For creating and managing tabs
- `chrome.tabGroups` - For managing tab groups

## Privacy Statement

This extension does not collect any user data and does not require any special permissions beyond access to tabs and tab groups.

## License

GPL3.0

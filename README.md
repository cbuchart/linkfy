# linkify

Super simple Chrome extension to replace any text matching a regex pattern into a clickable URL (you can use capture groups in the link format).

## How to Install

- Clone the repository. You can also download a zipped version, in this case unzip it in any permanent location, like your documents folder.
- Open Chrome (or your equivalent Chromium browser, like MS Edge).
- Open the Extensions page. You can access it by opening `chrome://extensions` too (or your browser equivalent, like `edge://extensions`).
- Be sure the Developer Mode is enabled.
- Click on Load Unpacked.
- Navigate into your _linkify_ directory and choose `src`.

## Adding a Link

- Open the extension's options
- Add a regex pattern. For example, if you want to add Jira tickets you can use something like `(JIRA-\d+)`.
- Add the link format. Following the previous example, it can be `https://mycompany.atlassian.net/browse/$1`.

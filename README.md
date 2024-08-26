# linkify

Super simple Chrome extension to replace any text matching a regex pattern into a clickable URL (you can use capture groups in the link format).

## How to Install

- Clone the repository. You can also download a zipped version, in this case unzip it in any permanent location, like your documents folder.
- Open Chrome (or your equivalent Chromium browser, like MS Edge).
- Open the _Extensions_ page. You can access it by opening `chrome://extensions` too (or your browser equivalent, like `edge://extensions`).
- Be sure the _Developer Mode_ is enabled.
- Click on _Load Unpacked_.
- Navigate into your _linkify_ directory and choose `src`.

## Adding a Link

- Open the extension's options
- Add a regex pattern. For example, if you want to add Jira tickets you can use something like `(JIRA-\d+)`.
- Add the link format. Following the previous example, it can be `https://mycompany.atlassian.net/browse/$1`.

## Recommendations

Some regex may be very generic or happen to be used inside other web page elements (this is the case of Jira tickets). In general, it is better to active the extension on demand by setting _Site Access_ to _On Click_, or to _On Specific Sites_ if you know the pages you want to modify.

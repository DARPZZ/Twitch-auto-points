# Twitch Auto Points

A Firefox extension that automatically claims available Twitch channel points while you watch your favorite streams.

## Features

✅ Automatically detects available channel point rewards
✅ Automatically clicks the claim button
✅ Runs in the background while Twitch is open
✅ Lightweight and simple to use
✅ Supports automatic updates through Firefox

## Installation

### Firefox (Recommended)

1. Download the latest release:

   https://github.com/DARPZZ/Twitch-auto-points/releases/latest

2. Open the downloaded `.xpi` file with Firefox.

3. Confirm the installation.

4. Open Twitch and start watching streams.

The extension will automatically claim available channel points.

## How It Works

The extension runs a content script on Twitch pages and monitors the channel point reward button.

When a reward becomes available:

1. The extension detects the claim button.
2. It automatically clicks the button.
3. The points are added to your Twitch account.

## Permissions

The extension requires access to:

* `https://www.twitch.tv/*`

This permission is required because the extension needs to interact with Twitch pages.

The extension does not collect, store, or transmit personal data.

## Browser Support

Currently supported:

* Firefox ✅

Chrome/Chromium support may be added in the future.

## Development

### Requirements

* Node.js
* npm

### Install dependencies

```bash
npm install
```

### Build Firefox version

```bash
npm run build:v2
```

Output:

```
dist/v2/
```

### Build Chrome version

```bash
npm run build:v3
```

Output:

```
dist/v3/
```

## Project Structure

```
.
├── src/
│   ├── background.ts
│   └── content.ts
│
├── public/
│   ├── manifest-v2.json
│   └── manifest-v3.json
│
├── webpack/
│   └── webpack.config.js
│
└── dist/
    ├── v2/
    └── v3/
```

## Automatic Updates

Firefox updates are managed through:

```
https://darpzz.github.io/Twitch-auto-points/updates.json
```

New releases are automatically signed by Mozilla and published through GitHub Releases.

## Contributing

Contributions, bug reports, and feature requests are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## Disclaimer

This extension is an unofficial Twitch helper tool.

It does not modify Twitch servers, bypass Twitch systems, or interact with account credentials.

Use responsibly and follow Twitch's Terms of Service.

## License

This project is licensed under the MIT License.

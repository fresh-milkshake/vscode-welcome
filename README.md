![Welcome Page](https://raw.githubusercontent.com/fresh-milkshake/welcome-page/main/assets/welcome.png?raw=true)

A welcome page extension so simple, you'll wonder if it does anything at all.

## Features

Automatically opens your favorite file every time VS Code starts. Perfect for:

- Daily notes or todo lists
- Project documentation
- Personal reminders
- Really, any file you want to see when VS Code opens

## Usage

### Setup

1. Install the extension from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=fresh-milkshake.welcome-page)
2. Reload VS Code or just window (`Ctrl+Shift+P` -> `Developer: Reload Window`)
3. On startup, the file will be opened automatically, if it's configured. If not, you'll see a message with a link to settings, where you can set the file path.

Example:

```
D:\code\projects\todo.md
```

### Manual Open

You can also open your welcome page anytime using the command palette:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type `Welcome Page: Open your page`
3. Press Enter

## Configuration

| Setting                | Description                                             | Default |
| ---------------------- | ------------------------------------------------------- | ------- |
| `welcomePage.filePath` | Absolute path to the file that will be shown on startup | `""`    |

## How It Works

- The extension activates when VS Code starts
- If you've configured a file path, it opens automatically
- If no path is configured, you'll see a message with a link to settings

That's it. Told you it was simple.

## Requirements

VS Code version 1.99.0 or higher

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/fresh-milkshake/welcome-page/main/LICENSE) file for details.

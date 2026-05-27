# Ubie Icons Native

Storybook: https://ubie-oss.github.io/ubie-icons/storybook-static/

## Installation

### Web

```
// with npm
npm install @ubie/ubie-icons

// with yarn
yarn add @ubie/ubie-icons

// with pnpm
pnpm add @ubie/ubie-icons
```

### React Native

```
// with npm
npm install @ubie/ubie-icons react-native-svg

// with yarn
yarn add @ubie/ubie-icons react-native-svg

// with pnpm
pnpm add @ubie/ubie-icons react-native-svg
```

## Usage

### Web

```js
import { Twitter } from '@ubie/ubie-icons';

export const TwitterButton = () => (
  <button type="button">
    <Twitter />
    Twitter
  </button>
);
```

### React Native

```js
import { Twitter } from '@ubie/ubie-icons/native';

export const TwitterButton = () => (
  <button type="button">
    <Twitter />
    Twitter
  </button>
);
```

`currentColor` is set for the icon's path, so you can change the color using CSS.

## Development

This project uses [pnpm](https://pnpm.io/) (see `packageManager` in `package.json`).

```bash
pnpm install
pnpm run build
pnpm run storybook
```

## License

This icon set is licensed under the [MIT License](https://github.com/ubie-oss/ubie-icons/blob/main/LICENSE).

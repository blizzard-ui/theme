# ❄️ @blizzard-ui/theme

[![react-native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/blizzard-ui/theme/ci.yml?style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dm/%40blizzard-ui/theme?style=for-the-badge)
![npm version](https://img.shields.io/npm/v/%40blizzard-ui/theme?style=for-the-badge)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](https://github.com/your-username/blizzard-ui/theme/blob/main/LICENSE)

| Default Light Palette            | Default Dark Palette           |
| -------------------------------- | ------------------------------ |
| ![light](./screenshot_light.jpg) | ![dark](./screenshot_dark.jpg) |

## ✏️ Description

`@blizzard-ui/theme` is a React Native UI library that provides a flexible and customizable theme palette for your applications. It allows you to easily define and switch between `light`, `dark` & `system` color schemes, making it effortless to create visually appealing and consistent UI designs.

## ✨ Features

- Define and manage multiple color schemes.
- Famous CSS Library `bootstrap` like name scheming.
- Easily switch between color schemes at runtime.
- Customizable color palette and lots more.

## 📦 Installation

Install the library using npm:

```shell
npm install @blizzard-ui/theme
```

or with yarn:

```shell
yarn add @blizzard-ui/theme
```

## 🚀 Usage

Import the `@blizzard-ui/theme` in your project and Wrap your application with the `ThemeProvider` component:

```javascript
import { ThemeProvider } from '@blizzard-ui/theme';

export const App = (): JSX.Element => (
  <ThemeProvider>
    {/* Your App Components here */}
  </ThemeProvider>
);
```

Use the `useTheme` hook to access the current theme:

```javascript
import { useTheme } from '@blizzard-ui/theme';

export const Component = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      {/* Your other components here */}
    </View>
  );
};
```

You can change the default color palette with your own color palette:

```javascript
import { ThemeProvider } from '@blizzard-ui/theme';
import type { ThemePalette } from '@blizzard-ui/theme';

const myPalette: ThemePalette = { light: { primary: '#ecee81' }, dark: { primary: '#ebe76c' } };

export const App = (): JSX.Element => (
  <ThemeProvider userPalette={myPalette}>
    {/* Your App Components here */}
  </ThemeProvider>
);
```

## 💄 Color Palette

| Palette Code                   | Preview                                                        |
| ------------------------------ | -------------------------------------------------------------- |
| `theme.colors.primary`         | ![#0d6efd](https://place-hold.it/150x22/0d6efd/ffffff&text=)   |
| `theme.colors.primarySubtle`   | ![#6ea8fe](https://place-hold.it/150x22/6ea8fe/ffffff&text=)   |
| `theme.colors.secondary`       | ![#adb5bd](https://place-hold.it/150x22/adb5bd/ffffff&text=)   |
| `theme.colors.secondarySubtle` | ![#ced3d7](https://place-hold.it/150x22/ced3d7/ffffff&text=)   |
| `theme.colors.info`            | ![#0dcaf0](https://place-hold.it/150x22/0dcaf0/ffffff&text=)   |
| `theme.colors.infoSubtle`      | ![#9eeaf9](https://place-hold.it/150x22/9eeaf9/ffffff&text=)   |
| `theme.colors.warning`         | ![#ffc107](https://place-hold.it/150x22/ffc107/ffffff&text=)   |
| `theme.colors.warningSubtle`   | ![#ffe69c](https://place-hold.it/150x22/ffe69c/ffffff&text=)   |
| `theme.colors.error`           | ![#dc3545](https://place-hold.it/150x22/dc3545/ffffff&text=)   |
| `theme.colors.errorSubtle`     | ![#f1aeb5](https://place-hold.it/150x22/f1aeb5/ffffff&text=)   |
| `theme.colors.success`         | ![#198754](https://place-hold.it/150x22/198754/ffffff&text=)   |
| `theme.colors.successSubtle`   | ![#a3cfbb](https://place-hold.it/150x22/a3cfbb/ffffff&text=)   |
| `theme.colors.tertiary`        | ![#6610f2](https://place-hold.it/150x22/6610f2/ffffff&text=)   |
| `theme.colors.tertiarySubtle`  | ![#c29ffa](https://place-hold.it/150x22/c29ffa/ffffff&text=)   |
| `theme.colors.surface`         | ![#fd7e14](https://place-hold.it/150x22/fd7e14/ffffff&text=)   |
| `theme.colors.surfaceSubtle`   | ![#fecba1](https://place-hold.it/150x22/fecba1/ffffff&text=)   |
| `theme.colors.neutral`         | ![#20c997](https://place-hold.it/150x22/20c997/ffffff&text=)   |
| `theme.colors.neutralSubtle`   | ![#a6e9d5](https://place-hold.it/150x22/a6e9d5/ffffff&text=)   |
| `theme.colors.body`            | ![#dee1e5](https://place-hold.it/150x22/dee1e5/ffffff&text=)   |
| `theme.colors.bodySubtle`      | ![#eff0f2](https://place-hold.it/150x22/eff0f2/ffffff&text=)   |
| `theme.colors.light`           | ![#9ec5fe](https://place-hold.it/150x22/9ec5fe/ffffff&text=)   |
| `theme.colors.lightSubtle`     | ![#cfe2ff](https://place-hold.it/150x22/cfe2ff/ffffff&text=)   |
| `theme.colors.dark`            | ![#031633](https://place-hold.it/150x22/031633/ffffff&text=)   |
| `theme.colors.darkSubtle`      | ![#084298](https://place-hold.it/150x22/084298/ffffff&text=)   |
| `theme.colors.transparent`     | ![#ffffff00](https://place-hold.it/150x22/ffffff/ffffff&text=) |
| `theme.colors.white`           | ![#ffffff](https://place-hold.it/150x22/ffffff/ffffff&text=)   |
| `theme.colors.black`           | ![#000000](https://place-hold.it/150x22/000000/ffffff&text=)   |

## 💡 Example

For detailed implementation & example, you can check out [here](https://github.com/blizzard-ui/theme/tree/main/example).

## 📖 Documentation

For detailed documentation is coming soon.

## ✅ TODO

- [x] Add Dark Mode support.
- [ ] Add Detailed documentation.
- [ ] Add Themed Typography, Border Radiuses, Sizes, Shadows & Spaces.
- [ ] Add Library Testing cases.

## 🤝🏻 Contributing

Contributions are welcome! If you find a bug or want to suggest a new feature, please open an issue or submit a pull request. See the [contribution guidelines](https://github.com/blizzard-ui/theme/blob/main/CONTRIBUTING.md) for more details.

## 📃 License

This library is open source and available under the [MIT License](https://github.com/blizzard-ui/theme/blob/main/LICENSE).

---

Feel free to customize this library to fit your specific app and add any additional sections or information that you think would be relevant by create a pull request.

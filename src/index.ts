export { ThemeProvider, useTheme } from './contexts/ThemeProvider';

export type * from './types/colors';

// import { NativeModules, Platform } from 'react-native';

// const LINKING_ERROR =
//   `The package '@blizzard-ui/theme' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// const Theme = NativeModules.Theme
//   ? NativeModules.Theme
//   : new Proxy(
//       {},
//       {
//         get() {
//           throw new Error(LINKING_ERROR);
//         },
//       }
//     );

// export function multiply(a: number, b: number): Promise<number> {
//   return Theme.multiply(a, b);
// }

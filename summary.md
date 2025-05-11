The POC demo contains two main projects:

### 1. **demo-react-plugin**
This is a cross-platform React plugin designed to provide components that can be integrated into both React and React Native applications. It includes:
- **`SampleComponent`**: A React Native component that uses platform-agnostic components (`View`, `Text`, `Pressable`) from `react-native-web`, making it compatible with both web and mobile environments.
- **Build System**: The plugin uses `Rollup` for bundling and outputs both CommonJS (`build/index.js`) and ES module (`build/index.es.js`) formats, with proper configuration to handle React Native components.
- **Styling**: The component uses React Native's `StyleSheet.create` for styling, ensuring consistent appearance across platforms.
- **Testing**: Jest is configured for unit testing, with proper setup to handle React Native components through `react-native-web`.
- **TypeScript**: The plugin is written in TypeScript, providing type definitions for better integration.
- **Cross-Platform Design**: The component is designed to work seamlessly in both web and mobile environments, using React Native's component primitives.

### 2. **next-app**
This is a Next.js application that integrates the `demo-react-plugin`. Key features include:
- **Integration**: The `SampleComponent` from `demo-react-plugin` is imported and used in the `pages/index.tsx` file, demonstrating web platform integration.
- **React Native Web Setup**: Configured to properly handle React Native components through `react-native-web` using Next.js webpack configuration.
- **State Management**: The app uses Zustand for state management, with a centralized store (`store/useAppStore.ts`) to manage shared state (`text`) and callbacks.
- **Local Dependency**: The `demo-react-plugin` is included as a local dependency (`file:../demo-react-plugin`) in the `package.json`.
- **Next.js Features**: The app uses React and Next.js features like server-side rendering and routing while maintaining compatibility with React Native components.
- **Callback Handling**: The app demonstrates callback functionality by setting up a callback in the Zustand store, which is triggered by `SampleComponent`.

### Summary
The `demo-react-plugin` provides truly cross-platform React components that can be used in both web (React) and mobile (React Native) applications. The `next-app` demonstrates how to integrate these components in a web environment using Next.js, while the same components can be used directly in React Native applications. This setup showcases a modular approach to building and sharing cross-platform React components, with state management handled by Zustand in the web application.
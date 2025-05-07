The POC demo contains two main projects:

### 1. **demo-react-plugin**
This is a reusable React plugin designed to provide components that can be integrated into other applications. It includes:
- **`SampleComponent`**: A React component that displays a styled message. It accepts props (`text`, `onTextChange`, and `onCallback`) to handle state and callbacks, making it app-agnostic and reusable across projects.
- **Build System**: The plugin uses `Rollup` for bundling and outputs both CommonJS (`build/index.js`) and ES module (`build/index.es.js`) formats.
- **Styling**: The component uses SCSS for styling, which is injected dynamically into the DOM during runtime.
- **Testing**: Jest is configured for unit testing, with a test file for `SampleComponent`.
- **TypeScript**: The plugin is written in TypeScript, providing type definitions for better integration.
- **App-Agnostic Design**: The component is designed to be independent of any specific application, relying on props for state and callback handling.

### 2. **next-app**
This is a Next.js application that integrates the `demo-react-plugin`. Key features include:
- **Integration**: The `SampleComponent` from `demo-react-plugin` is imported and used in the `pages/index.tsx` file to display a styled message and interact with the app's state.
- **State Management**: The app uses Zustand for state management, with a centralized store (`store/useAppStore.ts`) to manage shared state (`text`) and callbacks.
- **Local Dependency**: The `demo-react-plugin` is included as a local dependency (`file:../demo-react-plugin`) in the `package.json`.
- **Next.js Features**: The app uses React and Next.js features like server-side rendering and routing.
- **Callback Handling**: The app demonstrates callback functionality by setting up a callback in the Zustand store, which is triggered by `SampleComponent`.

### Summary
The `demo-react-plugin` provides reusable React components, while the `next-app` demonstrates how to integrate and use these components in a Next.js application. The setup showcases a modular approach to building and sharing React components across projects, with state management handled by Zustand in the main application.
```
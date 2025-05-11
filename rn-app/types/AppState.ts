export interface AppState {
  text: string;
  setText: (text: string) => void;
  callback: () => void;
  setCallback: (callback: () => void) => void;
}
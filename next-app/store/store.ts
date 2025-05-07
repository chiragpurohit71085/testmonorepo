import { create } from "zustand";
import { AppState } from "../types/AppState";

/**
 * Zustand store for managing shared application state.
 * This store handles:
 * - A shared text value (`text`)
 * - A callback function (`callback`) that can be triggered from components
 */
export const useAppStore = create<AppState>((set) => ({
  // Initial state
  text: "Initial Text",
  // Method to update the text value
  setText: (text) => set({ text }),
  // Callback function (default is a no-op)
  callback: () => { },
  // Method to set the callback function
  setCallback: (callback) => set({ callback }),
}));
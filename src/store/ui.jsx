import { create } from 'zustand'

const initialState = {
  isLoading: true,
  isConstruction: true,
  constructionPage: ["about-me", "my-work", "contact-me"],
  contsructionPwd: "ASD1205for@Construction",
  sectionCount: {
    "/": 1,
    "/about-me": 1,
    "/my-work": 1,
    "/contact-me": 1
  }
}

export const useUIStore = create((set) => ({
  ...initialState,
  setLoading: (loadBool) => set({ isLoading: loadBool }),
}))

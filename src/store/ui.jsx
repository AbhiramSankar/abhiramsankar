import { create } from 'zustand'

const CONSTRUCTION_PWD = import.meta.env.VITE_CONSTRUCTION_PWD;

const initialState = {
  isLoading: true,
  isConstruction: true,
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
  setConstruction: (pwd) => {
    const constBool = pwd === CONSTRUCTION_PWD;
    set({isConstruction: !constBool})
  }
}))

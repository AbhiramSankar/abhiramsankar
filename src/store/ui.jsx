import { create } from 'zustand'

const CONSTRUCTION_PWD = import.meta.env.VITE_CONSTRUCTION_PWD;

const initialState = {
  isLoading: true,
  isConstruction: true,
  resumeLink: "https://drive.google.com/file/d/13F5uY-9ePlgulioe6iNGgbepZw855NP3/view?usp=sharing",
  portfolioLink: "https://drive.google.com/file/d/1Iv0_vxbgXiXcCd8zwVBjgmNeJjm33zX-/view?usp=sharing",
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

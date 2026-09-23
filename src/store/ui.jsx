import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { verifyMaintPwd } from '../services/mainteneceApi'

const initialState = {
  isLoading: true,
  isMaintenanceUnlocked: false,
  notifyContent: false,
  resumeLink:
    'https://drive.google.com/file/d/13F5uY-9ePlgulioe6iNGgbepZw855NP3/view?usp=sharing',
  portfolioLink:
    'https://drive.google.com/file/d/1Iv0_vxbgXiXcCd8zwVBjgmNeJjm33zX-/view?usp=sharing',
  sectionCount: {
    '/': 1,
    '/about-me': 1,
    '/my-work': 1,
    '/contact-me': 1,
  },
}

export const useUIStore = create(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setLoading: (loadBool) => set({ isLoading: loadBool }),
        setNotifyContent: (content) => set({ notifyContent: content }),
        unlockMaintenance: (pwd) => {
          return verifyMaintPwd(pwd)
            .then((res) => {
              set({ isMaintenanceUnlocked: true })
              return res
            })
            .catch((e) => {
              set({ isMaintenanceUnlocked: false })
              return e.response?.data
            })
        },
        lockMaintanence: () => {
          set({ isMaintenanceUnlocked: false })
        },
      }),
      {
        name: 'portfolioMaintenece',
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          isMaintenanceUnlocked: state.isMaintenanceUnlocked,
        }),
      }
    )
  )
)

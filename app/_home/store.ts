import { create } from "zustand";
type ProjectStore = {
  inViewProject: null | string;
  setInViewProject: (project: string | null) => void;
};
export const useProjectStore = create<ProjectStore>((set) => ({
  inViewProject: null,
  setInViewProject: (project: string | null) => set({ inViewProject: project }),
}));

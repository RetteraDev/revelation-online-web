import { create } from "zustand";

interface ThemeState {
	theme: string;
	setTheme: (newTheme: string) => void;
}

const useTheme = create<ThemeState>((set) => ({
    theme: localStorage.getItem("theme") || "light",
    setTheme: (newTheme: string) => {
        localStorage.setItem("theme", newTheme)
        set({theme: newTheme})
    }
}))

export default useTheme;

import { useEffect } from "react";
import useTheme from "@/store/themeStorage";
import { LucideMoon, LucideSun } from "lucide-react";

function ThemeChanger() {
	const { theme, setTheme } = useTheme();

	function handleLanguageChange() {
		const newTheme = theme === "dark" ? "light" : "dark";
		const root = window.document.documentElement;
		root.classList.remove(theme);
		root.classList.add(newTheme);

		setTheme(newTheme);
	}

	useEffect(() => {
		const root = window.document.documentElement;
    	root.classList.remove('light', 'dark');
    	root.classList.add(theme);
	}, []);

	return (
		<div
			className="w-6 h-6"
			onClick={handleLanguageChange}
		>
			{theme == "light" && <LucideSun/>}
			{theme == "dark" && <LucideMoon/>}
		</div>
	);
}

export default ThemeChanger;

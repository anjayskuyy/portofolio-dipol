import React from "react";
import { Sun, Moon } from "lucide-react";
import useColorMode from "../hooks/useColorMode";

const ThemeToggle = ({ className = "" }) => {
	const { isLight, toggle } = useColorMode();
	const label = isLight ? "Ganti ke tema gelap" : "Ganti ke tema terang";

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={label}
			title={label}
			className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-fg/10 bg-fg/5 text-gray-200 hover:bg-fg/10 hover:border-accent/40 hover:text-accent transition-all duration-300 overflow-hidden ${className}`}
		>
			<Sun
				className={`absolute w-5 h-5 transition-all duration-500 ${
					isLight ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
				}`}
			/>
			<Moon
				className={`absolute w-5 h-5 transition-all duration-500 ${
					isLight ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
				}`}
			/>
		</button>
	);
};

export default ThemeToggle;

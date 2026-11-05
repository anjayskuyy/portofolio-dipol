import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const META_COLORS = { dark: "#020617", light: "#f4f8ff" };

const readTheme = () =>
	document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const applyTheme = (next) => {
	const root = document.documentElement;

	// transisi halus hanya selama pergantian tema
	root.classList.add("theme-transition");
	root.setAttribute("data-theme", next);
	window.setTimeout(() => root.classList.remove("theme-transition"), 400);

	try {
		localStorage.setItem(STORAGE_KEY, next);
	} catch {
		/* localStorage bisa saja diblokir (mode privat) — abaikan */
	}

	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) meta.setAttribute("content", META_COLORS[next]);
};

/**
 * Hook tema gelap/terang.
 * Nilai awal di-set oleh skrip kecil di index.html (sebelum React jalan)
 * supaya halaman tidak "kedip" waktu dibuka.
 */
export default function useColorMode() {
	const [theme, setTheme] = useState(readTheme);

	// sinkronkan semua tombol toggle yang ada di halaman
	useEffect(() => {
		const observer = new MutationObserver(() => setTheme(readTheme()));
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme"],
		});
		return () => observer.disconnect();
	}, []);

	const toggle = useCallback(() => {
		applyTheme(readTheme() === "light" ? "dark" : "light");
	}, []);

	return { theme, isLight: theme === "light", toggle };
}

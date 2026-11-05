import React from "react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// Halaman utama ("/") sudah punya toggle di Navbar,
// jadi tombol mengambang hanya muncul di halaman lain.
const FloatingThemeToggle = () => {
	const { pathname } = useLocation();
	if (pathname === "/") return null;

	return (
		<div className="fixed bottom-5 right-5 z-[60] rounded-xl bg-base/70 backdrop-blur-xl shadow-lg">
			<ThemeToggle />
		</div>
	);
};

export default FloatingThemeToggle;

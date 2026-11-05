/** @type {import('tailwindcss').Config} */

// Warna dibaca dari CSS variable (lihat src/index.css) supaya otomatis
// berganti antara tema gelap (hitam-biru) dan terang (putih-biru).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {
			backdropBlur: {
				sm: "4px",
			},
			colors: {
				base: token("bg"), // background halaman
				surface: token("surface"), // background card / input
				fg: token("fg"), // warna teks & garis utama (putih di gelap, navy di terang)
				accent: token("accent"), // biru utama
				accent2: token("accent2"), // biru muda (pasangan gradient)

				// Skala abu-abu dibalik di tema terang: teks redup tetap terbaca
				gray: {
					100: token("gray-100"),
					200: token("gray-200"),
					300: token("gray-300"),
					400: token("gray-400"),
					500: token("gray-500"),
					600: token("gray-600"),
					700: token("gray-700"),
				},
				// Biru/langit muda dipakai untuk teks & judul → jadi lebih tua di tema terang
				blue: {
					100: token("blue-100"),
					200: token("blue-200"),
					300: token("blue-300"),
					400: token("blue-400"),
				},
				sky: {
					200: token("sky-200"),
					300: token("sky-300"),
					400: token("sky-400"),
				},
				red: {
					400: token("red-400"),
				},
			},
		},
	},
	plugins: [],
};

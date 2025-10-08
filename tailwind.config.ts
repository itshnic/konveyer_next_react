import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: { extend: { colors: { primary: "#FF0000", secondary: "#00FF00" } } },
};
export default config;

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/images/background-mobile.png')",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;

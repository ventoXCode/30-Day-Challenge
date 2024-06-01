/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      gridTemplateColumns: {
        53: "repeat(53, minmax(0, 1fr))",
        30: "repeat(30, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

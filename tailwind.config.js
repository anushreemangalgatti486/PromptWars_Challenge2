/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1628",
        secondary: "#F5A623",
        accent: {
          blue: "#2A5FA8",
          teal: "#1D9E75",
          red: "#C0392B",
        },
        background: {
          light: "#FAFAF8",
          dark: "#0A1628",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#111D2E",
        },
        text: {
          primary: "#0A1628",
          secondary: "#6B7280",
          inverse: "#FFFFFF",
        },
        border: {
          light: "#E5E7EB",
          dark: "#1E3A5F",
        },
        success: "#1D9E75",
        warning: "#F5A623",
        error: "#C0392B",
        gold: "#C8A96E"
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-amber': '0 0 40px rgba(245,166,35,0.25)',
        'glow-blue': '0 0 40px rgba(42,95,168,0.25)'
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

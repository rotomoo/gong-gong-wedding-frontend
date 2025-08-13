/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6', // 신뢰감을 주는 파란색
        'primary-focus': '#2563EB',
        'secondary': '#F97316', // 따뜻한 포인트 오렌지
        'accent': '#10B981', // 강조 녹색
        'neutral': '#F3F4F6', // 부드러운 배경 회색
        'base-100': '#FFFFFF',
        'info': '#0EA5E9',
        'success': '#22C55E',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        gonggongwedding: {
          "primary": "#3B82F6",
          "secondary": "#F97316",
          "accent": "#10B981",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "base-content": "#1f2937",
          "info": "#0EA5E9",
          "success": "#22C55E",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
    ],
  },
};
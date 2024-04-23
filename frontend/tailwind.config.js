/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "panel-header-background": "var(--panel-header-background)",
        "panel-background-deeper": "var(--panel-background-deeper)",
        "outgoing-background": "var(--outgoing-background)",
        "chevron-button-background": "var(--chevron-button-background)",
        "quick-action-button-background":
          "var(--quick-action-button-background)",
        "poll-bar-fill-sender": "var(--poll-bar-fill-sender)",
        "poll-bar-container-sender": "var(--poll-bar-container-sender)",
        "poll-checkbox-default-border-color-sender":
          "var(--poll-checkbox-default-border-color-sender)",
        "popup-panel-background": "var(--popup-panel-background)",
        "panel-background-colored": "var(--panel-background-colored)",
        "photopicker-overlay-background":
          "var(--photopicker-overlay-background)",
        "switch-track-checked-color": "var(--switch-track-checked-color)",
        "switch-track-color": "var(--switch-track-color)",
        "input-border": "var(--input-border)",
        "unread-marker-background": "var(--unread-marker-background)",
        "switch-button-color": "var(--switch-button-color)",
        transparent: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};

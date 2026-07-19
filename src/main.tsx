import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import "./index.css"
import App from "@/App.tsx"

/*
 * No ThemeProvider. The brand is light AND dark at once — the dark sections are
 * part of the design on every page, not a user preference.
 * See docs/brandboard/07-color-palette.md
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

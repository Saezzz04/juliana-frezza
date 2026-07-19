import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { About } from "@/pages/about"
import { Contact } from "@/pages/contact"
import { Experience } from "@/pages/experience"
import { Home } from "@/pages/home"
import { PracticeAreaDetail, PracticeAreas } from "@/pages/practice-areas"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route
            path="/practice-areas/:slug"
            element={<PracticeAreaDetail />}
          />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <SiteFooter />
    </>
  )
}

export default App

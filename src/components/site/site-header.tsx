import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

import { NAV } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Wordmark } from "@/components/site/primitives"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* Home opens on the ink hero, so the header sits on dark there. Every other
     page opens on paper. */
  const onDarkHero = pathname === "/"

  useEffect(() => {
    let lastY = window.scrollY

    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 24)
      // Hide going down, reveal going up — but never while the menu is open.
      setHidden(y > 200 && y > lastY)
      lastY = y
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out",
        onDarkHero && "dark",
        hidden && !menuOpen && "-translate-y-full",
        scrolled &&
          "border-b border-border bg-background/85 text-foreground backdrop-blur-md",
        !scrolled && onDarkHero && "text-paper",
        !scrolled && !onDarkHero && "text-foreground"
      )}
    >
      <div className="flex items-center justify-between px-6 py-5 sm:px-12">
        <Link
          to="/"
          className="link-underline"
          aria-label="Juliana Frezza — home"
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "label link-underline font-normal transition-opacity",
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            className="label link-underline md:hidden"
            aria-label="Open menu"
          >
            Menu
          </SheetTrigger>

          {/* Full-screen, on ink — docs/brandboard/10-web-structure.md */}
          <SheetContent
            side="right"
            className="dark w-full border-0 bg-background text-foreground sm:max-w-none"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>

            <nav className="flex flex-col gap-2 px-6 pt-24">
              {NAV.map((item, i) => (
                <SheetClose
                  key={item.to}
                  render={<Link to={item.to} />}
                  className="rise w-fit font-heading text-3xl leading-tight"
                  style={
                    { "--rise-delay": `${i * 60}ms` } as React.CSSProperties
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

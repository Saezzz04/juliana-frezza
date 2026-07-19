/**
 * Fails the build while any <Figure placeholder> is still in the tree.
 *
 * The three portraits ship as AI comps during design and must be swapped for the
 * real photo shoot before launch. A lawyer's site showing an AI face as her own
 * misrepresents her to the people deciding whether to hire her — so the swap is
 * not a nice-to-have, and "we'll remember" is not a mechanism.
 *
 * Escape hatch for staging/preview builds: ALLOW_PLACEHOLDERS=1 bun run build
 */
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return walk(path)
    return entry.name.endsWith(".tsx") ? [path] : []
  })
}

const found = walk("src").flatMap((path) => {
  const lines = readFileSync(path, "utf8").split("\n")
  // <Figure … placeholder … > — attributes span lines, and nothing between the
  // angle brackets contains a literal '>'.
  const hits = []
  const source = lines.join("\n")
  const re = /<Figure\b[^>]*?\bplaceholder\b[^>]*?>/gs

  for (const match of source.matchAll(re)) {
    const line = source.slice(0, match.index).split("\n").length
    hits.push(`${path}:${line}`)
  }
  return hits
})

if (found.length === 0) {
  console.log("check:assets — no placeholder images. Clear to ship.")
  process.exit(0)
}

if (process.env.ALLOW_PLACEHOLDERS) {
  console.warn(
    `check:assets — ${found.length} AI placeholder(s), allowed by ALLOW_PLACEHOLDERS:\n  ${found.join("\n  ")}`
  )
  process.exit(0)
}

console.error(
  `check:assets FAILED — ${found.length} AI placeholder image(s) still in the tree:\n  ${found.join("\n  ")}\n\n` +
    `These are stand-ins for the real photo shoot. Replace the asset and drop the\n` +
    `\`placeholder\` prop. See docs/assets/00-index.md.\n` +
    `Staging build that needs them anyway: ALLOW_PLACEHOLDERS=1 bun run build`
)
process.exit(1)

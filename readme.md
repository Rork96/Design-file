# Paulrork Design System

Personal brand system for **@paulrork** — a Ukrainian-language Instagram profile (posts + stories) with the **Rork Web** wordmark. The system covers colour, type, canvas layout and the template set for 1080×1080 posts and 1080×1920 stories.

## Sources
- Figma file "Figma UojFQLDeNRUTBHtwdPLiuK.fig" — one page, one frame: **Story ideal Lines** (node 129:156, 2226×2639). Contains the story safe-zone/camera-thirds guide, four framed swatches and three colour-role labels. It defines **0 components, 0 variable collections, 0 text styles**.
- Figma file "Figma 4lNhjGPIvtGrDTiD51ondN.fig" — frame "Group 28" (node 53:70): 144×120 logo badge on #446DF4 (confirms `--rork-blue-logo`). Vector logo supplied as `assets/logo-rork.svg` (70×39, transparent; white letters + black shadow). The old raster `assets/logo-rork-web.png` is kept as reference.
- Figma file "Figma UojFQLDeNRUTBHtwdPLiuK.fig" (updated) — frame **Вроцлав** (1080², node 287:368): exact geometry now used in `WroclawPost`; text colour #303BFF, lime "Poland" #DFFE90, frame stroke #7657F5, shadow 35/35/35 @30%. Images (crest, barcode trace, "image 16") were not exported — shown as slots.
- Uploaded fonts: Ruberoid, Phenomena, Sonder Sans (see Fonts).
- Uploaded screenshots (copied to `assets/`): Rork Web logo artwork; two Instagram posts (#4 blue "Привіт", #6 lime "Я люблю") with their palette strips; the Story ideal Lines frame.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/brand` — **Logo**, **Handle**
- `components/type` — **GlowHeading**, **Bullet**, **BulletList**
- `components/canvas` — **Canvas**, **PhotoSlot**, **SwatchTile**, **StoryGuides**
- `ui_kits/instagram/` — QuestionPost, ListPost, StoryTemplate, ColourBoard + interactive `index.html`
- `assets/` — `logo-rork-web.png`, `reference/` source screenshots
- `ds-fallback.js` — dev helper so cards render before the compiled bundle exists
- `SKILL.md`

### Intentional additions
The Figma file defines no components, so every component here is extracted from patterns repeated in the artwork:
- Logo, Handle — wordmark and "❤️ paulrork" signature appear on all artwork.
- GlowHeading, Bullet, BulletList — title and list patterns from posts 4 and 6.
- Canvas — native 1080 artboards with preview scaling.
- PhotoSlot — the grey #D9D9D9 crop blocks in both posts.
- SwatchTile, StoryGuides — taken directly from the Figma frame.

## Content fundamentals
- **Language:** Ukrainian. Cyrillic support is mandatory for every font.
- **Voice:** first person, warm, conversational, addressed to "ти" (informal you). Examples: "Привіт", "А що тобі подобається дарувати людям?", "Я люблю", "Обожнюю коли рідні шарять", "Я буду вести свій профіль".
- **Structure:** one short greeting/title (1–2 words) + one question or 3 short statements. No paragraphs.
- **Casing:** sentence case for post copy; UPPERCASE only for system labels ("АХРОМАТИЧНІ", "АКЦЕНТ", "ДОДАТКОВИЙ КОЛІР").
- **Punctuation:** questions end in "?"; list items have no trailing period. Colloquialisms are fine ("шарять").
- **Emoji:** only the red heart in the handle signature. No other emoji.

## Visual foundations
- **Colour:** two palettes. *Palette A* (blue post): periwinkle #C2CAE8, violet #7D70F6, lime #E0FD90, black. *Palette B* (lime post): periwinkle #CFD9FC, lime #CCFD80, electric blue #303BFF, stone #E3DED8, violet #7757F9. Figma roles: **ахроматичні** (#1D1D1D, #FCFCFC), **акцент** (#1128F3), **додатковий колір** (#534DC6). Backgrounds are one flat saturated colour per canvas — blue, lime or indigo.
- **Pairings:** lime type on blue; ink type + violet title on lime; blue title on a lime glow.
- **Type:** wide geometric display sans for titles (bold) and big questions (regular); uppercase labels in ultralight display, geometric medium, and light condensed; mono for the handle. Tight leading (≈1.0–1.4), slight negative tracking (−0.02em on labels).
- **Backgrounds:** flat colour; logo sits on blue with a fine square grid. No gradients, no photos as full-bleed backgrounds, no textures.
- **Highlight:** a lime block blurred ~10px behind the title — the only soft effect in the system.
- **Photo slots:** square-cornered grey (#D9D9D9) rectangles of a few fixed sizes, scattered on a shared grid; they bleed off edges and sit on top of type intentionally (collage feel).
- **Corners:** 0 radius everywhere. Avatar circle only in story guides.
- **Borders:** thick dark frames (24px #242424) around swatches; thin 1px guides in design files only.
- **Shadows:** none, except the logo's hard black extruded drop shadow (part of the artwork).
- **Transparency/blur:** only the glow highlight; 50% alpha only for guide fills.
- **Layout:** text is left-aligned with a bullet column (~109px) and text column (~176px) at 1080 width. Story content stays below the 128px header band and is aligned to camera thirds (x 387/781, y 604/1301).
- **Motion / hover / press:** not defined in source (static social artwork). In interactive previews use instant state changes; no animation is specified.
- **Imagery:** not provided yet; slots imply personal photos cropped into small rectangles.

## Iconography
- No icon set in the source. The one glyph is the **square-in-square bullet** (rebuilt in CSS as `Bullet` from simple squares — approximate; replace with the original vector if available).
- Emoji: ❤️ in the handle only. No icon font, no unicode icons.
- If icons are ever needed, use a square, geometric line set (e.g. Lucide, 2px) — this would be a substitution, not part of the source.

## Fonts
All brand fonts supplied and wired in `tokens/fonts.css` (files in `assets/fonts/`):
- **Ruberoid** UltraLight 200 (+ Oblique), Regular 400, Bold 700 → `--font-label` / `--font-display`
- **Futura** Medium 500 → `--font-geometric`
- **Phenomena** Light / Regular / Bold → `--font-condensed` (story lists, condensed headings)
- **Sonder Sans** Black + Black Rough → `--font-wordmark` (Latin only, no Cyrillic)
- Handle mono → **JetBrains Mono** (only remaining stand-in)

## Additional templates (from later screenshots)
- **Case study carousel** (blue 1080², thin periwinkle frame, "Кейс «7zupiburger» 2022", GASTRONOMY, Paul Rork) → `CasePost`
- **Вроцлав** dark navy editorial post → `WroclawPost` (navy tone is estimated; crest image is a slot)
- **Instagram story - 9** white word list in Phenomena → `WordListStory`
References: `assets/reference/`.

## Proposed templates (not from source artwork)
Built from existing tokens at the user's request; confirm or adjust:
- **CarouselSlide** — 1080² cover / numbered point / closing slide, blue or lime theme, "n/total" counter, handle bottom-left.
- **HighlightCover** — 1080×1920 with the mark centred inside Instagram's circular crop (toggle "Story guides" to see the crop), four colour themes.

## Fonts (previously missing — now supplied)
Squad → `--font-title-condensed`, Script.ttf (La Luxes) → `--font-script`, Nocturne Serif → `--font-serif`. Rage Italic and Ruberoid Medium/Thin/Semi Bold Oblique are still not supplied.

### Original notes
Referenced in the Вроцлав frame but not supplied: **Squad** (title/signature, 40–58px), **La Luxes** (script signature "Paul Rork", 96px), **Nocturne Serif**, **Rage Italic**. Tokens `--font-script`, `--font-title-condensed`, `--font-serif` are declared with fallbacks; add the files to `assets/fonts/` and `@font-face` rules to `tokens/fonts.css`.
Ruberoid Medium / Thin / Semi Bold Oblique are also referenced; approximated with Regular / UltraLight / Bold-italic until supplied.

## How to use this system as context
Attach this project (or its folder) to a new design project. `SKILL.md` + `readme.md` give the rules; `styles.css` loads tokens and fonts; build artefacts from `components/` and `ui_kits/instagram/`. Canvases are 1080px wide (post 1080×1080, story 1080×1920).

## Finished artwork (assets/illustrations)
Exported SVGs of finished posts, with embedded photos: `wroclaw-crest.svg` (Вроцлав 1080², crest image + vectors), `ticket-to-canada.svg` (1080², 4 embedded images), `foodtruck.svg` (3 carousel slides side by side, 3635×1080, "Кейс 7zupiburger"). Use as reference or drop in as-is; shown on the "Готові макети" tab of the Instagram kit.

## Website kit (`ui_kits/website/`)
English portfolio site, dark editorial mood (navy #1B1C3F like the «Вроцлав» post), desktop + mobile (breakpoint 860px, burger menu). Structure follows the reference makeai.in.ua (sticky nav, framed hero, card grid, numbered services, contact form); copy and visuals are original.
- Screens: Home, Cases, Case page (7zupiburger with real numbers from the post), Services, About, Contact. Hash routing (`#cases`, `#case/7zupiburger`).
- Files: `website.css` (site layout; imports root `styles.css`), `Chrome.jsx` (Nav, Footer, Btn, Bullet, SectionHead), `Pages.jsx`, `index.html`.
- Web rules: body text in periwinkle #CFD9FC on navy (blue #303BFF is decorative only on dark: contrast too low for text); lime #E0FD90 for buttons, links and numbers; square corners; Squad wordmark "Paul Rork"; La Luxes script signature in violet #7D70F6.
- Placeholders: portrait photo, service prices ("quote on request"), contact form is not wired. Case thumbnails reuse finished artwork from `assets/illustrations/`.

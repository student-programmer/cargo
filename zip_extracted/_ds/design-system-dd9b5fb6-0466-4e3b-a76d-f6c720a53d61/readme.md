# Энергия Юга — Design System

**Энергия Юга** («Energy of the South») is a solar-energy company serving southern Russia — Rostov, Krasnodar, Stavropol. It designs, installs, and services rooftop solar stations for homes, businesses and farms, and gives owners a monitoring app for the installed station. Tagline from the supplied logo: **«Солнечные решения для вашей независимости»** (solar solutions for your independence).

The product story is one line, and it is also the brand's graphic device:

> **Солнце → Панели → Инвертор → Аккумулятор → Дом**

## Sources given

| Source | Status |
| --- | --- |
| `uploads/ChatGPT Image Aug 22, 2026, 06_39_48 PM.png` — full logo lockup (raster, 1536×1024, white background) | Read; cropped into `assets/` |
| Company description: "ЭНЕРГИЯ ЮГА" | Read |
| Brief note: the graphic line (Солнце → Панели → Инвертор → Аккумулятор → Дом) must run through hero, section breaks, cards, animation, icons, mobile, decks, social | Implemented as `EnergyFlow` / `FlowDivider` |

No codebase, Figma file, website, or deck was provided. Everything below is derived from the supplied lockup plus the brief; **layouts and copy in the UI kits are illustrative, not client-approved**. Colours were sampled directly from the supplied PNG.

## Products represented

1. **Marketing site** (`ui_kits/website/`) — public landing: hero, how-it-works, ready-made systems, calculator, projects, request dialog.
2. **Monitoring app** (`ui_kits/app/`) — owner dashboard: production, battery, settings.

No slide template was supplied, so no sample deck is included.

---

## Content fundamentals

**Language.** Russian, always. Latin only in units and model names (`кВт·ч`, `INV-2`, `SN 4429-EY`).

**Address the reader as «вы», never «ты», and never capitalised «Вы».** The company speaks as «мы»:
- «Приезжаем на объект, снимаем данные по крыше и потреблению.»
- «Работаем своей бригадой, без субподряда.»
- «Считаем окупаемость по вашим счетам, а не по средним значениям.»

**Tone: engineer, not salesman.** Concrete numbers beat adjectives. Say «окупаемость 4,2 года», not «выгодное решение». Every claim carries a figure or a condition («Расчёт предварительный. Погрешность до 12%»). Never «инновационный», «уникальный», «эко-технологии будущего».

**Sentence case everywhere.** Headings are sentence case with no terminal period («Солнце уже работает на ваш дом»). The only uppercase text is the eyebrow / label style, with wide 0.18em tracking, borrowed from the logo's tagline lockup: `СОЛНЕЧНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕЙ НЕЗАВИСИМОСТИ`, `ПРОЕКТЫ`, `ВЫРАБОТКА СЕГОДНЯ`.

**Length.** Headline ≤ 6 words. Body paragraph ≤ 2 sentences. Card copy one sentence. App labels 1–3 words.

**Numbers, Russian convention.** Comma decimal (`42,8`), thin/space thousands (`9 640 ₽`), unit after a space with `·` in compounds (`кВт·ч`). Currency symbol after the number. Percentages without a space (`68%`).

**Buttons are verbs in the infinitive:** «Рассчитать систему», «Получить смету», «Оставить заявку», «Сохранить режимы». Never «Отправить заявку сейчас!» — no exclamation marks anywhere.

**No emoji.** Ever — in product, marketing, or decks. Status is carried by a coloured dot, a Lucide glyph, or a badge.

**Vibe:** calm competence, southern daylight, and the quiet promise of independence from the grid.

---

## Visual foundations

**Colour.** Two brand colours, sampled from the lockup: **navy** `#061C36` (structure — text, panels, app chrome, night sky) and **solar yellow** `#FEB813` (energy — one action per view, active flow nodes, eyebrows). Neutrals are cool greys mixed toward the navy hue (`#F3F6FA`, `#EBEFF5`, `#D7DEE8`, `#5B6B80`). Status colours (`--ok-500` … `--info-500`) are for system state only, never decoration. Discipline: **one yellow element per screen region** — a page with three yellow buttons has none.

**Type.** Display/headings **Montserrat** (Black 900 for display, Bold 700 for headings) — geometric, wide-Cyrillic, closest available match to the wordmark. Body **Manrope** 400/500/600. Numbers, units, timestamps **JetBrains Mono**. Display tracking −0.02em; body line-height 1.5, long-form 1.65; eyebrows uppercase at 0.18em. Scale: 64 / 48 / 38 / 30 / 24 / 20 / 18 / 16 / 14 / 13 / 11.

**Spacing & layout.** 4px base; used steps 4 8 12 16 24 32 48 64 96 128. Page max width 1240px, 32px page padding (20px mobile), 24px grid gutter, 96px vertical section rhythm (56px mobile). Marketing sections alternate `--surface-page` → `--surface-subtle` → `--surface-inverse`; never two navy sections in a row. Fixed elements: the site header only (sticky, 76px, translucent + blur); the app's SideNav is static, 244px.

**Backgrounds.** Flat colour or one of three gradients: `--grad-night` (navy hero/footer), `--grad-panel` (panel-glass surfaces), `--grad-sun` (3px card top rules, progress fills). No photography was supplied, so the system ships **no imagery** — where a photo would go, use a navy surface with the energy line or the logo mark. No patterns, no textures, no hand-drawn illustration. `--grad-protect` exists for the day photos arrive: a bottom-up navy scrim under text over an image (protection gradient, never a capsule behind text).

**Corners.** 4px inside controls (checkbox, chart bars), 8px controls (buttons, inputs, tags), 12px cards, 16px dialogs, 24px large panels, pill for badges and progress tracks.

**Cards.** White surface, 1px `--border-subtle` hairline, 12px radius, soft navy-tinted shadow (`--sh-1`/`--sh-2`). The featured card adds a 3px `--grad-sun` rule flush along the top edge. Navy cards use a translucent white hairline plus `--sh-inset-top`. **Never a coloured left border, never a gradient card fill.**

**Shadows.** Always navy-tinted, never black: `0 1px 2px rgba(6,28,54,.06)` → `0 18px 48px rgba(6,28,54,.14)`. One extra: `--sh-solar` (`0 8px 20px rgba(232,162,0,.28)`) under primary buttons only. Inner shadow appears once — the top hairline on navy surfaces.

**Borders.** Hairlines only (1px), except the flow line and node rings (2px) and the card top rule (3px). Dividers are `--border-subtle` on light, `rgba(255,255,255,.14)` on navy.

**Transparency & blur.** Two sanctioned uses: the sticky header (`--glass-light` / `--glass-dark` + 12px blur) and the dialog scrim (`rgba(6,28,54,.55)` + 3px blur). Nothing else is translucent; charts, cards, and badges are opaque.

**Animation.** 120ms micro, 180ms default, 320ms entrances, all `ease-out`; the energy line's travelling dot takes 2400ms `ease-in-out`. Motion is horizontal, left → right, mirroring energy along the line — plus one 6% scale pulse on the active flow node. Dialogs rise 12px and fade. **No bounce, no spring, no parallax, no rotation.** `prefers-reduced-motion` kills all of it (in `tokens/motion.css`).

**Hover.** Fills lighten one step (solar-500 → solar-400; navy-800 → navy-700); quiet variants pick up `--n-50`; cards lift 2px and deepen one shadow step; nav links reveal a 2px solar underline. **Press:** 1px downward nudge, no scale, no colour change beyond hover. **Focus:** 3px `rgba(254,184,19,.45)` ring, never removed. **Disabled:** 45% opacity, no colour swap.

**Imagery colour vibe (for future photography).** Warm midday southern daylight, deep blue sky, real rooftops and installers at work; no grain, no cool grading, no stock-photo handshakes. Panels always read dark navy-blue, never teal.

---

## Iconography

- **Set: [Lucide](https://lucide.dev) 0.469.0, loaded from CDN — a flagged substitution.** No icon set, sprite, or icon font was supplied, and no logo-derived glyph family exists. Lucide's 2px round-cap stroke is the closest match to the lockup's line weight.
- Rendered as **real inline SVG** injected by the pinned Lucide UMD build (`components/core/Icon.jsx`) so glyphs inherit `currentColor`. Never hand-draw an SVG icon in this system, and never paste a redrawn Lucide path.
- Sizes: 16 (inline/caption), 20 (default, controls), 24 (feature chips), 32+ (flow nodes only). Stroke width stays 2 at every size.
- Colour: `currentColor` from the parent. Inside solar chips the glyph is navy; on navy surfaces it is white; accent glyphs use `--solar-500`.
- **Brand set (the five flow stages first):** `sun`, `grid-2x2` (panels — Lucide has no solar-panel glyph; flagged), `plug-zap` (inverter), `battery-charging`, `house`; then `trending-up`, `shield-check`, `wallet`, `phone`, `arrow-right`, `layout-dashboard`, `settings`, `clock`, `thermometer`, `triangle-alert`, `circle-check`, `download`, `check`, `x`, `bell`, `user`, `save`, `chevron-down`.
- **No emoji, no unicode symbols as icons.** The only non-icon glyphs used are `→` in prose, `·` as a separator, and `₽`.
- **Logo assets** live in `assets/`, cropped from the supplied PNG: `logo-lockup.png`, `logo-lockup-inverse.png`, `logo-mark.png`, `logo-mark-inverse.png`, `logo-wordmark.png`, plus the untouched `source-logo.png`. Inverse variants were produced by recolouring the navy geometry to white and keeping the yellow; the mark itself was not redrawn. Clear space = the height of the «Э»; minimum lockup height 28px, below that use the mark alone.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link (imports only)
- `readme.md` — this guide · `SKILL.md` — Agent-Skills wrapper · `thumbnail.html` — homepage tile

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `motion.css`, `base.css`

**`assets/`** — logo lockups, mark, wordmark, inverse variants, original source PNG

**`guidelines/`** — 23 specimen cards (Colors, Type, Spacing, Brand) + `lucide-init.js`

**`components/`** (26 exports)
- `core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **StatTile**, **Logo**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `navigation/` — **NavBar**, **Tabs**, **SideNav**, **Footer**
- `feedback/` — **Alert**, **ProgressBar**, **Dialog**, **Tooltip**
- `brand/` — **EnergyFlow** (+ `FLOW_STAGES`), **FlowDivider**, **FeatureTile**

**`ui_kits/`**
- `website/` — marketing landing (`index.html`, `Sections.jsx`, `README.md`)
- `app/` — monitoring dashboard (`index.html`, `Screens.jsx`, `README.md`)

### Intentional additions
No source defined a component inventory, so the set above is the standard primitive set sized to this brand, plus three brand-specific pieces required by the brief: **EnergyFlow** (the five-stage graphic line), **FlowDivider** (its section-break reduction) and **FeatureTile** (icon + step + copy block used by both products).

### Substitutions to confirm
1. **Fonts** — Montserrat / Manrope / JetBrains Mono stand in for the real brand fonts. The wordmark is a squared geometric Cyrillic face that is *not* Montserrat. Please send the actual font files.
2. **Icons** — Lucide 0.469.0 via CDN, with `grid-2x2` standing in for a solar panel.
3. **Logo** — raster PNG crops from the supplied image; an SVG original would be much better.
4. **Photography** — none supplied, so the system ships without imagery.

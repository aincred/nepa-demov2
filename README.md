# North Eastern Police Academy – website (HTML / CSS / JS)

## Files
| File | What it is |
|---|---|
| `index.html` | Home page (slider, programmes, news, about, facilities, gallery) |
| `about.html` | About NEPA page |
| `directors.html` | Director page: present Director and former Directors (photo: `images/director/`) |
| `partials/header.html` | Header: skip link, government bar, logo, main menu, notice ticker |
| `partials/footer.html` | Footer: links, address, phone, email, map, copyright |
| `css/style.css` | All styles |
| `js/main.js` | Menu, ticker pause, slider, gallery viewer, scroll animation |
| `js/include.js` | Connects the header and footer to every page |
| `js/partials-bundle.js` | Auto-generated copy of the header/footer (for double-click use) |
| `build_partials.py` | Regenerates `partials-bundle.js` after you edit a partial |
| `images/` | All photos (placeholders – replace with yours) |

## How the header and footer are connected
`index.html` contains two empty slots:

    <div data-include="partials/header.html"></div>
    <div data-include="partials/footer.html"></div>

`js/include.js` replaces each slot with the matching HTML file. Add the same two lines to any new page
(plus `<script src="js/main.js">`, `js/partials-bundle.js` and `js/include.js` at the end of the body).

- **Double-click `index.html`:** works. The browser cannot read HTML files this way, so the copy in
  `js/partials-bundle.js` is used.
- **Web server** (`python -m http.server 8000`, VS Code Live Server, or your hosting): the HTML files are loaded directly.

**After editing `partials/header.html` or `partials/footer.html`, run `python build_partials.py`** once so the
double-click copy is updated too (not needed on a web server).

## Changing photos
Replace the files below with your own, keeping the same file names (or edit the path in `index.html`).
Update the `alt` text in `index.html` to describe your new photo.

| Folder | Files | Suggested size |
|---|---|---|
| `images/logo/` | `nepa-logo.jpg` | 380 x 358 |
| `images/slider/` | `slide-01.jpg` … `slide-12.jpg` | 1600 x 600 (landscape) |
| `images/programs/` | `basic-course.jpg`, `inservice-course.jpg`, `training-calendar.jpg`, `brochure.jpg` | 800 x 500 |
| `images/about/` | `about-nepa.jpg` | 800 x 600 |
| `images/facilities/` | `facilities.jpg`, `media.jpg`, `upcoming-courses.jpg` | 800 x 500 |
| `images/gallery/` | `indoor-class.jpg`, `firing.jpg`, `outdoor-class.jpg`, `riot-drill.jpg` | 800 x 600 (use ≤ 300 KB each) |

To add a slider photo: copy one `<li class="slide">…</li>` and one `<button class="dot">…</button>`
in `index.html`; the counter updates itself. To add a gallery photo, copy one `<li class="gal-li">…</li>`
(both `data-full` and the `<img src>` should point to your file).

## GIGW 3.0 notes
Keep meaningful `alt` text on every photo, keep file sizes small, and keep the pause buttons
(slider and notice ticker). Animations switch off automatically for visitors who ask their device for reduced motion.
# nepav3

## Director page photos
Put photos in `images/director/` (present Director: edit `src` in `directors.html`) and
`images/director/former/` (one per former Director, 5:6 portrait, e.g. 600 x 720, ≤ 150 KB, `.jpg`):
a-a-ali, b-r-lall, r-s-mushahari, g-c-raiger, k-k-jha, t-pachuau, r-r-verma, a-k-mathur,
d-r-doley-barman, kala-ramachandran, deepak-kumar, anurag-agarwal, danesh-rana, anshuman-yadav.
Until a file is added, the silhouette placeholder is shown.

## Hindi / English switch
The "हिन्दी | English" buttons are in the top bar (`partials/header.html`). The choice is saved on the visitor's device and applies on every page.
- `js/lang.js` does the switching; `js/lang-hi.js` holds the Hindi text (English text on the left, Hindi on the right).
- To translate new text, add a line to `js/lang-hi.js`. For a paragraph with bold words or links, put the Hindi HTML in a `data-hi="..."` attribute on that paragraph.
- Add `data-no-i18n` to any element that must stay as it is. Names of award recipients and ranks are shown in English.
- Add `<script src="js/lang-hi.js"></script><script src="js/lang.js"></script>` before `js/include.js` on every new page.

## Header logos
Three logos sit on the right of the header (`partials/header.html`): `images/logo/azadi-amrit-mahotsav.png`, `iyc-2025.png`, `cyber-dost.png`.
To use your own files, save them with these names (PNG with transparent or white background; about 200 px tall is enough). After editing the header run `python build_partials.py`.
# nepa-demov2

# Project guidance

Maintain this as a small static website using HTML, CSS, and vanilla JavaScript.

- Keep visitor-facing content and source code in English.
- Preserve the user's verified identity, contact information, and project claims. Ask for missing personal information instead of inventing it.
- Keep the public URL stable. The QR exports, canonical URL, Open Graph metadata, and vCard website field must agree.
- Keep the CV at `cv.pdf` and the portrait at `assets/photo.jpg` so routine replacements require only one file update.
- Use relative paths for local files so the site works under a GitHub Pages project path.
- Keep the bundled Inter and Lucide license notices with their assets.
- Preserve semantic headings, keyboard access, readable contrast, responsive layouts, and reduced-motion behavior.
- Keep core content and download links usable when JavaScript is unavailable.
- Test both themes, sharing fallbacks, CV downloads, and contact-card fields after changes affecting those features.
- Run browser checks at mobile and desktop widths and check for horizontal overflow before publishing changes.
- Add only dependencies needed for the requested behavior. Hosting uses a public GitHub Pages repository with the included github.io address.
- Update README verification status only after the stated checks actually complete.
- Never commit credentials or authentication data.

# Khaled Metwalie · Personal Portfolio

A mobile-first personal portfolio and digital business card, built with HTML, CSS, vanilla JavaScript, and Lucide icons. This repository hosts the site through GitHub Pages.

## Portfolio URL

[Open the portfolio](https://kahledawad2019-netizen.github.io/personal-portfolio/)

The QR exports encode this exact URL.

## Features

- Portrait, professional title, short bio, skills, and three selected projects.
- CV viewing in a new tab and a separate PDF download link.
- LinkedIn, GitHub, email, WhatsApp, and phone links.
- Downloadable vCard 3.0 for importing the contact into a device's address book.
- Native device sharing with a copy-link dialog when native sharing is unavailable.
- Light and dark themes, following the device preference initially and remembering an explicit choice.
- Keyboard navigation, visible focus, reduced-motion support, and useful content without JavaScript.
- Locally hosted font and icons.

## Project files

| Path | Purpose |
| --- | --- |
| `index.html` | Profile, skills, projects, contact links, and search/share metadata |
| `style.css` | Responsive layout, typography, light and dark themes |
| `script.js` | Theme controls, sharing, copy fallback, and footer year |
| `cv.pdf` | Current one-page CV |
| `contact.vcf` | Downloadable contact card |
| `assets/photo.jpg` | User-supplied portrait |
| `assets/favicon.png` | Small profile monogram |
| `assets/icons.svg` | Lucide icon sprite |
| `assets/inter-latin.woff2` | Inter variable font, Latin characters |
| `assets/LUCIDE-LICENSE.txt` | Lucide license |
| `assets/INTER-LICENSE.txt` | Inter font license |
| `qr/khaled-metwalie-qr.png` | 1440 × 1440 QR image, with 600 DPI metadata |
| `qr/khaled-metwalie-qr.svg` | Scalable QR artwork with a white background |
| `.nojekyll` | Publish the static files directly |
| `AGENTS.md` | Project maintenance guidance |

## Publish using GitHub Pages

1. Sign in to the GitHub account `kahledawad2019-netizen`.
2. Create a repository named exactly `personal-portfolio` and select **Public**. Initialize it with a README so it has a `main` branch.
3. Open the repository, choose **Add file → Upload files**, and upload the contents of the local `personal-portfolio` folder. Upload `index.html` directly to the repository root. Preserve the `assets` and `qr` subfolders. Replace the initial README with this one.
4. Commit the files to `main`. If the operating system hides `.nojekyll`, create that empty file through **Add file → Create new file**.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then choose **Save**.
8. Wait for the Pages deployment to finish. Its status is available in the repository's **Actions** tab.
9. Return to **Settings → Pages** and open the published website link. It should match the target URL shown above.
10. Open the website on a phone and a desktop, verify the controls and downloads, and scan the QR export before printing.

GitHub Pages is available for public repositories on GitHub Free. This project uses the included `github.io` address and static files. GitHub's published service limits and terms apply. [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### Deploy through Git

After creating the empty public repository, run these commands from this folder with an authenticated Git installation. If the repository already contains commits, clone it first and copy these files into the checkout before committing.

```sh
git init -b main
git add .
git commit -m "Build personal portfolio and digital business card"
git remote add origin https://github.com/kahledawad2019-netizen/personal-portfolio.git
git push -u origin main
```

Then configure Pages using steps 5–9 above.

## Update the website

Commit changes to `main`. Pages republishes the site from the same address.

| Change | Files to update |
| --- | --- |
| Replace the CV | Upload the new PDF as `cv.pdf` |
| Change the portrait | Replace `assets/photo.jpg`, preserving the filename. Update its alt text and intrinsic dimensions in `index.html` if appropriate |
| Update name, title, or bio | Edit `index.html`. Update `contact.vcf` when contact-card fields change |
| Change email or phone | Update the visible text and `mailto:`, `tel:`, or `wa.me` URLs in `index.html`, plus the corresponding vCard fields |
| Change social profiles | Update the links in `index.html` and the social profile fields in `contact.vcf` |
| Add or change a featured project | Edit the project cards in `index.html` and verify the repository URLs |
| Change colors or spacing | Edit the custom properties and layout rules in `style.css` |

For WhatsApp, use the international phone number as digits only in `https://wa.me/201064675763`. For the phone link, use `tel:+201064675763`. Preserve CRLF line endings in the vCard.

If an update appears cached, reload the page after the Pages deployment completes. The browser share dialog and QR code use the canonical profile URL stored in `index.html`.

## Permanent QR code

The QR contains the website URL directly. It has no redirect service, account, subscription, or expiry built into it. It continues pointing to the website while that URL remains available.

Replacing the CV, photo, content, or design at the same address requires no QR change. Renaming the GitHub account or repository changes this project site's default URL. If you intentionally change the address, update the canonical and Open Graph URLs in `index.html`, the website URL in `contact.vcf`, this README, and both QR exports.

Use the SVG for professional printing or the PNG for documents and simple print tools. Keep the white margin around the code, preserve its square shape, and print black on white. A starting size of 30 mm square is suitable for a business card. Test a physical proof with more than one phone and in ordinary indoor light before ordering a batch.

The QR uses error correction level Q and a four-module quiet zone. The PNG has been decoded programmatically and its contents match the target URL.

To regenerate the files with the same target, install the open-source Python `qrcode` package in a local development environment and run the following from the project folder. Python is only needed to generate the artwork.

```sh
python -m pip install "qrcode[pil]"
```

```python
import qrcode
from qrcode.image.svg import SvgPathFillImage

url = "https://kahledawad2019-netizen.github.io/personal-portfolio/"
code = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_Q,
    box_size=32,
    border=4,
)
code.add_data(url)
code.make(fit=True)
code.make_image(fill_color="black", back_color="white").save(
    "qr/khaled-metwalie-qr.png", dpi=(600, 600)
)
code.make_image(image_factory=SvgPathFillImage).save(
    "qr/khaled-metwalie-qr.svg"
)
```

## Local preview

From this project folder, start a static development server.

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. Use HTTP for previewing the external SVG sprite. Clipboard and native sharing availability depend on browser permissions and the browsing context. The copy dialog includes a selectable link when automatic copying is unavailable.

The share action always uses the configured public URL, including when previewing locally.

## Verification

Prepublication checks completed on 18 November 2026.

- Reviewed the CV and the three public project repository READMEs.
- Checked all local file references, navigation targets, and unique HTML IDs.
- Checked JavaScript syntax.
- Confirmed that the CV contains PDF data and the vCard has complete CRLF-delimited fields.
- Decoded the PNG QR and confirmed the target URL.

Use the live website to repeat these checks after changes.

1. Test 320, 375, 390, 768, 1024, and 1440 pixel viewport widths with no horizontal scrolling.
2. Test both themes, refresh persistence, the system default, keyboard focus, and reduced-motion preference.
3. Open **View CV** and download the PDF independently using **Download CV**.
4. Use **Save contact** and inspect the imported name, title, phone, email, location, and website on iOS or Android.
5. Open all three project repositories, LinkedIn, GitHub, and WhatsApp. Confirm that email and phone buttons invoke the device's configured apps.
6. Test native sharing on a supported phone and the copy dialog on desktop. Test closing the dialog and returning keyboard focus.
7. Scan both QR formats from a screen and a printed proof, and confirm that the live portfolio opens.

## Content and licenses

Profile information comes from Khaled Metwalie's supplied CV and confirmed GitHub repositories. The portrait was supplied for this website. Contact information is public on the deployed page and in the downloadable vCard.

Lucide 0.468.0 and Inter 5.2.8 are bundled with their license notices. The website loads its font, icons, portrait, CV, and scripts from the same origin. External services are reached when a visitor follows a contact or project link.

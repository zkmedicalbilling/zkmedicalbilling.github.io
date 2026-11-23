# ZK Medical Billing Knowledge Hub

A static, responsive, bilingual (English/Urdu) educational website for GitHub Pages.

## Files
- `index.html` — homepage structure
- `assets/style.css` — design and responsive layout
- `assets/articles.js` — article titles, descriptions and categories
- `assets/script.js` — category filters, search and language toggle

## Publish on GitHub Pages
1. Extract this ZIP on your computer.
2. Open your `zkmedicalbilling.github.io` repository.
3. Upload `index.html` and the complete `assets` folder to the repository root.
4. If GitHub asks, choose to replace the old files.
5. Commit changes to the `main` branch.
6. Open `https://zkmedicalbilling.github.io` and refresh with `Ctrl + F5`.

## Add an article
Edit `assets/articles.js` and add another object to `window.KB_ARTICLES`. Provide English and Urdu title/description plus a category.

## Privacy and accuracy
This is a public educational website. Never publish patient names, dates of birth, member IDs, claim numbers, medical records, screenshots, login details, or other protected/private information. Verify payer policies and coding guidance with authoritative, current sources before relying on them. The sample articles are educational placeholders, not payer-specific instructions.

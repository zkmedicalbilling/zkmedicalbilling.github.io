# ZK Medical Billing Knowledge Hub

A bilingual (English/Urdu), responsive static website designed for free hosting on GitHub Pages.

## Publish it with GitHub Pages

1. Sign in to GitHub and create a **new public repository**.
2. Recommended repository name: `YOUR-GITHUB-USERNAME.github.io` (replace with your actual GitHub username).
3. Upload all files and folders from this project. Keep `index.html` at the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait a few minutes. Your site should appear at `https://YOUR-GITHUB-USERNAME.github.io/`.

The repository name must match your GitHub username for the shortest `username.github.io` address. If you use another repository name, the address will usually include the repository name after your username.

## Add a new update

1. Open your repository on GitHub.
2. Open `assets/articles.js`.
3. Click the pencil icon to edit.
4. Copy an existing article object (from `{` to `}`), paste it inside the `articles` array, and update the date, category, title and excerpt in both English and Urdu.
5. Commit the changes to the `main` branch.
6. GitHub Pages will rebuild and publish the update automatically.

Example:

```js
{
  date: "2026-12-01",
  category: "Insurance Updates",
  categoryUr: "انشورنس اپڈیٹس",
  title: "Your English article title",
  titleUr: "آپ کے مضمون کا اردو عنوان",
  excerpt: "A short English summary of your update.",
  excerptUr: "آپ کی اپڈیٹ کا مختصر اردو خلاصہ۔"
}
```

For now, article cards display a short summary. A future version can add full article pages, search, and a dedicated writing workflow.

## Important content and privacy guidance

- Never publish patient names, dates of birth, member IDs, claim numbers, medical record numbers, screenshots containing PHI, login details or other confidential information.
- Do not present educational content as payer-specific policy unless you have checked the payer's current official guidance.
- Add the source and effective date for coding or payer-policy updates.
- This site is educational and is not legal, coding, billing or medical advice.

## Local preview

Open `index.html` in a modern browser. An internet connection is needed to load the optional Google Fonts; the site remains usable if fonts do not load.

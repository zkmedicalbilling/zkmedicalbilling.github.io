let currentLanguage = "en";
const toggle = document.getElementById("langToggle");

function renderArticles() {
  const container = document.getElementById("articleList");
  if (!container) return;
  if (!Array.isArray(articles) || articles.length === 0) {
    container.innerHTML = `<div class="empty-state">${currentLanguage === "en" ? "No articles yet. Add your first post in assets/articles.js." : "ابھی کوئی مضمون موجود نہیں۔ پہلا مضمون assets/articles.js میں شامل کریں۔"}</div>`;
    return;
  }
  container.innerHTML = articles.map(post => {
    const title = currentLanguage === "en" ? post.title : (post.titleUr || post.title);
    const excerpt = currentLanguage === "en" ? post.excerpt : (post.excerptUr || post.excerpt);
    const category = currentLanguage === "en" ? post.category : (post.categoryUr || post.category);
    return `<article class="article-card">
      <span class="article-tag">${escapeHTML(category)}</span>
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(excerpt)}</p>
      <span class="article-date">${escapeHTML(post.date || "")}</span>
    </article>`;
  }).join("");
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en][data-ur]").forEach(element => {
    element.textContent = element.dataset[language];
  });
  toggle.textContent = language === "en" ? "اردو" : "English";
  renderArticles();
}
toggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ur" : "en"));
renderArticles();
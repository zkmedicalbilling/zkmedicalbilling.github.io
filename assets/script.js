(() => {
 const articles = window.KB_ARTICLES || [];
 const grid = document.getElementById("articleGrid");
 const filters = document.getElementById("categoryFilters");
 const search = document.getElementById("searchInput");
 const empty = document.getElementById("emptyMessage");
 const languageButton = document.getElementById("languageToggle");
 let language = "en";
 let category = "All";
 const categories = ["All", ...new Set(articles.map(a => a.category))];

 function renderFilters(){
   filters.innerHTML = "";
   categories.forEach(item => {
     const button = document.createElement("button");
     button.className = "filter-btn" + (category === item ? " active" : "");
     button.type = "button";
     button.textContent = item === "All" ? (language === "en" ? "All topics" : "تمام موضوعات") : item;
     button.addEventListener("click", () => { category = item; renderFilters(); renderArticles(); });
     filters.appendChild(button);
   });
 }
 function renderArticles(){
   const query = search.value.trim().toLowerCase();
   const visible = articles.filter(a => {
     const matchesCategory = category === "All" || a.category === category;
     const haystack = [a.title,a.titleUr,a.description,a.descriptionUr,a.category].join(" ").toLowerCase();
     return matchesCategory && haystack.includes(query);
   });
   grid.innerHTML = "";
   visible.forEach(a => {
     const card = document.createElement("article");
     card.className = "article-card";
     const tag = document.createElement("span"); tag.className = "article-tag"; tag.textContent = a.category;
     const title = document.createElement("h3"); title.textContent = language === "en" ? a.title : a.titleUr;
     const desc = document.createElement("p"); desc.textContent = language === "en" ? a.description : a.descriptionUr;
     const note = document.createElement("span"); note.className = "read-more"; note.textContent = language === "en" ? "Learning resource" : "سیکھنے کا مواد";
     card.append(tag,title,desc,note); grid.appendChild(card);
   });
   empty.hidden = visible.length !== 0;
   empty.textContent = language === "en" ? "No articles found. Try another search." : "کوئی مضمون نہیں ملا، دوبارہ تلاش کریں۔";
 }
 function setLanguage(next){
   language = next;
   document.body.classList.toggle("urdu", language === "ur");
   document.documentElement.lang = language;
   document.querySelectorAll("[data-en][data-ur]").forEach(el => el.textContent = el.dataset[language]);
   languageButton.textContent = language === "en" ? "اردو" : "English";
   search.placeholder = language === "en" ? "Search articles..." : "مضامین تلاش کریں...";
   search.setAttribute("aria-label", language === "en" ? "Search articles" : "مضامین تلاش کریں");
   renderFilters(); renderArticles();
 }
 search.addEventListener("input", renderArticles);
 languageButton.addEventListener("click", () => setLanguage(language === "en" ? "ur" : "en"));
 document.getElementById("year").textContent = new Date().getFullYear();
 setLanguage("en");
})();
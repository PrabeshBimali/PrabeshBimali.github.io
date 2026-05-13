class BlogPost extends HTMLElement {
  connectedCallback() {

    const title = this.getAttribute("title") || "No title";
    const excerpt = this.getAttribute("excerpt") || "Expert not found";
    const date = this.getAttribute("date") || "2000-00-00";
    const path = this.getAttribute("path") || "#";
    const readingTime = this.getAttribute("reading-time") || "5 min read";
    
    this.innerHTML = /* html */ `
      <a href="${path}" class="flex flex-col md:flex-row md:items-center gap-6 p-6 border-b border-slate-800 hover:bg-slate-900 transition-colors group cursor-pointer">
        <div class="font-mono text-xs text-slate-500 w-32 shrink-0">${date}</div>
        <div class="grow">
          <h4 class="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-1">${title}</h4>
          <p class="text-slate-400 text-sm line-clamp-1">
            ${excerpt}
          </p>
        </div>

        <div class="flex items-center gap-2 text-slate-500 font-mono text-xs">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
          <span>
            ${readingTime}
          </span>
        </div>
      </a>
    `
  }
}

customElements.define("blog-post", BlogPost);
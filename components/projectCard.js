class ProjectCard extends HTMLElement {
  connectedCallback() {

    const title = this.getAttribute("title") || "No Title Provided";
    const description = this.getAttribute("description") || "No Description provided";
    const repoLink = this.getAttribute("repo-link") || "#";
    const liveLink = this.getAttribute("live-link") || "#";
    const techs = this.getAttribute("techs") ? this.getAttribute("techs").split(",") : []; 


    this.innerHTML = /* html */ `
      <div class="flex flex-col h-full p-8 bg-slate-900/50 border border-slate-800 rounded-lg group hover:border-cyan-500/50 transition-all duration-300">
        <h3 class="text-2xl text-center font-bold text-slate-100 mb-3">
          ${title}
        </h3>
        <p class="text-slate-400 mb-6 leading-relaxed flex-grow">
          ${description}
        </p>
        <div class="flex gap-3 mb-3">
          <a href=${repoLink} target="_blank" class="flex-1 text-sm text-center border border-slate-700 text-slate-200 py-1 rounded-sm hover:bg-slate-900 transition-all">
            Github Repo
          </a>
          <a href=${liveLink} target="_blank" class="flex-1 text-sm text-center bg-cyan-400 text-slate-950 py-1 rounded-sm hover:bg-cyan-300 transition-all">
            Live
          </a>
        </div>
        <div class="flex flex-wrap gap-2">
          ${
            techs.map(t => {
              return (
                ` <span class="inline-flex items-center font-mono align-middle text-[9px] uppercase font-bold border border-slate-700 px-2 py-1 rounded bg-slate-950 text-slate-400">
                    ${t.trim()}
                  </span>
                `
              );
            }).join("")
          }
        </div>
      </div>
    `
  }
}

customElements.define("project-card", ProjectCard);
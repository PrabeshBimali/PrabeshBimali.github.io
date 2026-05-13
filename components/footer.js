class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML=/* html */ `
      <footer class="bg-slate-950 border-t border-slate-800">
        <div class="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs tracking-widest text-cyan-400 font-bold">Prabesh Bimali</span>
            </div>
            <p class="font-mono text-[10px] text-slate-500 uppercase tracking-tight">© 2026 Fullstack Developer | Develop site for you.</p>
          </div>
          <div class="flex gap-8">
            <a 
              class="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors" 
              href="https://github.com/PrabeshBimali"
            >
              GitHub
            </a>
            <a 
              class="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors" 
              href="https://linkedin.com/in/prabesh-bimali"
            >
              LinkedIn
            </a>
            <a 
              class="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors" 
              href="/resume"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define("my-footer", MyFooter)
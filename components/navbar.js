class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
      <div class="bg-slate-950/80 border-b border-slate-800 backdrop-blur-md fixed top-0 w-full z-50">
        <div class="flex-grow container flex justify-between mx-auto px-4 md:px-8 lg:px-16 py-5 items-center">
          <a href="/" class="flex items-center gap-1 cursor-pointer text-2xl hover:text-cyan-300 group">
            <img src="/assets/my-logo.png" alt="Logo" class="w-8 h-8 image-pixelated transition-transform group-hover:scale-110">
            <span class="font-semibold text-cyan-400 group-hover:text-cyan-300">
              Prabesh
            </span> 
            <span class="text-slate-400 group-hover:text-slate-300">
              Bimali
            </span>
          </a>
          <div>
            <div>
              <div class="hidden gap-8 text-xl text-slate-400 md:flex">
                <a href ="/#projects" class="inline-block hover:text-cyan-400">Projects</a>
                <a href ="/blogs" class="hover:text-cyan-400">Blogs</a>
                <a href ="/#contact" class="hover:text-cyan-400">Contact</a>
              </div>
            </div>
            <div class="flex md:hidden text-white">
              Hamburger menu for later
            </div>
          </div>
        </div> 
      </div>
    `;
  }
}

customElements.define("my-navbar", MyNavbar);
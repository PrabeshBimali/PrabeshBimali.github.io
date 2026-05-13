class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
      <div class="bg-slate-950/80 border-b border-slate-800 backdrop-blur-md fixed top-0 w-full z-50">
        <div class="flex-grow container flex justify-between mx-auto px-4 md:px-8 lg:px-16 py-5 items-center">
          <div class="">
            <span class="font-semibold text-2xl">
              Prabesh
            </span> 
            <span class="text-xl text-yellow-500">
              Bimali
            </span>
          </div>
          <div>
            <div>
              <div class="hidden gap-8 text-xl text-slate-400 md:flex">
                <a href ="#projects" class="inline-block hover:text-cyan-400">Projects</a>
                <a href ="/" class="hover:text-cyan-400">Blogs</a>
                <a href ="/" class="hover:text-cyan-400">Contact</a>
                <a href="/resume" class="hover:text-cyan-400">Resume</a>
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
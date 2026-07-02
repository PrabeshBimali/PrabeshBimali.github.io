class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <header class="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
          <div class="flex items-center justify-between h-20">

            <a href="/" class="flex items-center gap-2 group">
              <img
                src="/assets/my-logo.png"
                alt="Logo"
                class="w-8 h-8 image-pixelated transition-transform duration-300 group-hover:scale-110"
              />

              <span class="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300">
                Prabesh
              </span>

              <span class="text-2xl text-slate-400 group-hover:text-slate-300">
                Bimali
              </span>
            </a>

            <nav class="hidden md:flex items-center gap-8 text-lg text-slate-400">
              <a href="/#projects" class="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="/blogs" class="hover:text-cyan-400 transition">
                Blogs
              </a>

              <a href="/#contact" class="hover:text-cyan-400 transition">
                Contact
              </a>
            </nav>

            <button id="menu-btn" class="md:hidden text-white" aria-label="Toggle Menu" aria-expanded="false">
              <svg
                id="hamburger"
                class="w-8 h-8 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div id="mobile-menu" class="md:hidden overflow-hidden max-h-0 opacity-0 transition-all duration-300">
            <nav class="flex flex-col py-4 text-lg text-slate-300">
              <a href="/#projects" class="px-2 py-3 rounded hover:bg-slate-800 hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="/blogs" class="px-2 py-3 rounded hover:bg-slate-800 hover:text-cyan-400 transition">
                Blogs
              </a>

              <a href="/#contact" class="px-2 py-3 rounded hover:bg-slate-800 hover:text-cyan-400 transition">
                Contact
              </a>
            </nav>
          </div>

        </div>
      </header>
    `;

    const button = this.querySelector("#menu-btn");
    const menu = this.querySelector("#mobile-menu");
    const icon = this.querySelector("#hamburger");

    let open = false;

    const closeMenu = () => {
      open = false;

      menu.classList.remove("max-h-96", "opacity-100");
      menu.classList.add("max-h-0", "opacity-0");

      icon.innerHTML = `
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      `;

      button.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      open = true;

      menu.classList.remove("max-h-0", "opacity-0");
      menu.classList.add("max-h-96", "opacity-100");

      icon.innerHTML = `
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      `;

      button.setAttribute("aria-expanded", "true");
    };

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      open ? closeMenu() : openMenu();
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });
  }
}

customElements.define("my-navbar", MyNavbar);
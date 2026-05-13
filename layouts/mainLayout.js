import "../components/navbar.js"

class MainLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <div class="flex flex-col min-h-screen bg-slate-950 text-slate-200">
        <my-navbar>
        </my-navbar>

        <main class="flex-grow container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div id="page-content">
             ${this.innerHTML}
          </div>
        </main>
      </div>
    `;
  }
}

customElements.define("main-layout", MainLayout);
import "../components/navbar.js"

class MainLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <div class="flex flex-col min-h-screen bg-gray-50">
        <!-- 1. Global Navbar -->
        <my-navbar></my-navbar>

        <!-- 2. Consistent Body Container -->
        <main class="flex-grow container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <!-- The 'slot' is where your page content will go -->
          <div id="page-content">
             ${this.innerHTML}
          </div>
        </main>

        <!-- 3. Global Footer -->
      </div>
    `;
  }
}

customElements.define("main-layout", MainLayout);
class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
      <div class="flex">
        <div>
          Prabesh Bimali
        </div>
        <div>
          <a href="/">Resume</a>
          <a href ="/">Projects</a>
        </div>
      </div> 
    `;
  }
}

customElements.define("my-navbar", MyNavbar);
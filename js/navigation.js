class NavigationComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="nav-header">
        <nav>
            <div class="heading-container nav-heading">
            <h1 class="site-heading">
              <a href="index.html">
                  KAI ASUNCION
              </a>
            </h1>
            </div>
            <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <ul class="nav-ul">
            <li><a href="/" class="nav-item">Home</a></li>
            <li><a href="/portfolio" class="nav-item">Portfolio</a></li>
            <li><a href="/about" class="nav-item">About</a></li>
            <li><a href="/#contact" class="link-button contact-button">Contact</a></li>
        </ul>
        </div>
        `;
  }
}

customElements.define("app-navigation", NavigationComponent);

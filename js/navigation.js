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
            <li><a href="index.html" class="nav-item">Home</a></li>
            <li><a href="portfolio.html" class="nav-item">Portfolio</a></li>
            <li><a href="about.html" class="nav-item">About</a></li>
            <li><a href="index.html#contact" class="link-button">Contact</a></li>
        </ul>
        </div>
        `;
  }
}

customElements.define("app-navigation", NavigationComponent);

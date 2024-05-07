class FooterComponent extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
            <footer>
            <div class="footer-wrapper">
            <h5 class="footer-header">Kai Asuncion</h5>
                <div>
                    <p><a href="mailto:kaiasunciondev@gmail.com">kaiasunciondev@gmail.com</a></p>
                </div>
                <ul class="footer-ul">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/kaiasuncion/" class="social-link"
                        ><i class="fa-brands fa-linkedin"></i> Linked In</a
                        >
                    </li>
                </ul>
                <p>&copy; ${currentYear} Kai Asuncion</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', FooterComponent);
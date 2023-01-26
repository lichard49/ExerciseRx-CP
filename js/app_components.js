class FooterTabs extends HTMLElement {
  constructor() {
    super(); 
  }
  
  connectedCallback() {
    this.innerHTML = `
    <div id="footer">
      <div class="footer-tab">Home</div>
      <div class="footer-tab">Exercise</div>
      <div class="footer-tab">Progress</div>
    </div>
    `;
  }
}

customElements.define('footer-tabs', FooterTabs);

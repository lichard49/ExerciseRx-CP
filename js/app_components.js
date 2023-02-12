class FooterTabs extends HTMLElement {
  constructor() {
    super(); 
  }
  
  connectedCallback() {
    this.innerHTML = `
    <div id="footer">
      <div class="footer-tab">
        <img src="img/footer_tab_home.png">
        <p>Home</p>
      </div>
      <div class="footer-tab">
        <img src="img/footer_tab_exercise.png">
        <p>Exercise</p>
      </div>
      <div class="footer-tab">
        <img src="img/footer_tab_progress.png">
        <p>Progress</p>
      </div>
    </div>
    `;
  }
}

//Used for Buttons
function newPage(){
  window.location.href = "tbd.html";
}

//these functions are in progress.html; not sure if needed for future code but put these "tbd" functions just in case/to be more clear
function tbdLeftArrow(){

}

function tbdRightArrow(){

}

customElements.define('footer-tabs', FooterTabs);

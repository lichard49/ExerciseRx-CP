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
//Function for main page to creating exercise plan page
function newPage(){
  window.location.href = "create_exercise_plan.html";
}

//Function for default plan to finalizing exercise page plan page
function defaultPlanPageChange(){
  window.location.href = "finalized_exercise_plan.html";
}

//Function for new plan to finalizing exercise page plan page
function savePlanPageChange(){
  window.location.href = "finalized_exercise_plan.html";
}

//Function for starting exercises plan 
function startWorkoutPage(){
  window.location.href = "tbd.html";
}

var info_section_selected = false;
function toggleHelpMenu(){
  var img = document.getElementById("toggle");
  if(info_section_selected == false){
    info_section_selected = true;
    img.style.visibility = "visible";
  }else{
    info_section_selected = false;
    img.style.visibility = "hidden";
  }
}
//these functions are in progress.html; not sure if needed for future code but put these "tbd" functions just in case/to be more clear
function tbdLeftArrow(){

}

function tbdRightArrow(){

}

customElements.define('footer-tabs', FooterTabs);

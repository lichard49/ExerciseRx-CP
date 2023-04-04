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

// Used for Buttons
function newPage() {
  window.location.href = "create_exercise_plan.html";
}

// Function for default plan to finalizing exercise page plan page
function defaultPlanPageChange() {
  window.location.href = "finalized_exercise_plan.html";
}

// Function for new plan to finalizing exercise page plan page
function savePlanPageChange() {
  window.location.href = "finalized_exercise_plan.html";
}

//Function for starting exercises plan 
function startPositioningPage() {
  window.location.href = "tbd.html";
}

let info_section_selected = false;
function toggleHelpMenu() {
  const img = document.getElementById("toggle");
  if (info_section_selected == false) {
    info_section_selected = true;
    img.style.visibility = "visible";
  } else {
    info_section_selected = false;
    img.style.visibility = "hidden";
  }
}

let start_exercise_alignment_pop_up_selected = false;
function toggleAlignment(){
  const img = document.getElementById("toggle_align");
  if (start_exercise_alignment_pop_up_selected == false) {
    start_exercise_alignment_pop_up_selected = true;
    img.style.visibility = "visible";
  } else {
    start_exercise_alignment_pop_up_selected = false;
    img.style.visibility = "hidden";
  }
}

function tbdRightArrow() {

}

customElements.define('footer-tabs', FooterTabs);

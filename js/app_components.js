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

//Function for default plan to finalizing exercise page plan page
function defaultPlanPageChange() {
  window.location.href = "finalized_exercise_plan.html";
}

//Function for new plan to finalizing exercise page plan page
function savePlanPageChange() {
  window.location.href = "finalized_exercise_plan.html";
}

//Function for starting exercises plan 
function startWorkoutPage() {
  window.location.href = "tbd.html";
}

// code to highlight button/change box colors on selected exercises 
let is_exercise_selected = false;

function exerciseSelected() {
  const img = document.getElementById("button");
  const sets = document.getElementById("box_sets_bicycle_kicks");
  const reps = document.getElementById("box_reps_bicycle_kicks");
  const box = document.getElementById("flex_container_exer_plan_bicycle_kicks");

  if (is_exercise_selected == false) {
    is_exercise_selected = true;
    img.src = 'img/img_checkmark_selected.png';
    sets.style.background = "#FFFFFF"; 
    reps.style.background = "#FFFFFF"; 
    box.style.background = "#F3EDFE"
  } else {
    is_exercise_selected = false;
    img.src = 'img/img_circle_button_clear.png';
    sets.style.background = "#F3EDFE"; 
    reps.style.background = "#F3EDFE"; 
    box.style.background = "#FFFFFF";
  }
}

/* 
// trying to find a way to get the selected exercises to the final exercise plan page, so far not working, will try coming back to it

let selected_exercise_list = [];
function addBicyleKicks(exercise_name) {
  exercise_name.style.visibility = hidden;
  selected_exercise_list.push("bicycle_kicks");
  console.log('array = ' + selected_exercise_list[0]);
}

// helper method to parse exercise Id's 
// to parse, the part that is same for all is 25 letters (inclusive)
function nameParser(name) {
  name_length = name.length - 13; 
  console.log(name);
}
*/

var info_section_selected = false;
function toggle() {
  var img = document.getElementById("toggle");
  if (info_section_selected == false) {
    info_section_selected = true;
    img.style.visibility = "visible";
  } else {
    info_section_selected = false;
    img.style.visibility = "hidden";
  }
}

//these functions are in progress.html; not sure if needed for future code but put these "tbd" functions just in case/to be more clear
function tbdLeftArrow() {

}

function tbdRightArrow() {

}

customElements.define('footer-tabs', FooterTabs);

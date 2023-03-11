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
  window.location.href = "create_exercise_plan.html";
}


//code to highlight button/change box colors on selected exercises 
var is_exercise_selected = false; 
function exerciseSelected(){
  var img = document.getElementById("button");
  var sets = document.getElementById("box_sets_bicycle_kicks");
  var reps = document.getElementById("box_reps_bicycle_kicks");
  var box_color = document.getElementById("bicycle_kicks_background");

  if (is_exercise_selected == false){
    is_exercise_selected = true;
    img.src = 'img/img_checkmark_selected.png';
    sets.style.background="#FFFFFF"; 
    reps.style.background="#FFFFFF"; 
    box_color.style.background = "#F3EDFE"
  }else{
    is_exercise_selected = false;
    img.src = 'img/img_circle_button_clear.png';
    sets.style.background="#F3EDFE"; 
    reps.style.background="#F3EDFE"; 
    box_color.style.background = "#FFFFFF";
  }

}
/**/ 

function toggle(){
  var img = document.getElementById("toggle");
  img.style.display = "none";
}
//these functions are in progress.html; not sure if needed for future code but put these "tbd" functions just in case/to be more clear
function tbdLeftArrow(){

}

function tbdRightArrow(){

}

customElements.define('footer-tabs', FooterTabs);

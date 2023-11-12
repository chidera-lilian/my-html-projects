const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const activeStep = document.querySelectorAll(".input-field");
const phone = document.querySelector(".input-phone")
const phone2 = document.querySelector(".input-phone2")
const span = document.querySelectorAll(".span")


//for first form page next btn. The reason these are so long is because I want to validate each input individually instead of page by page. I believe this way is more user-friendly than just alerting the existence of an empty input field.
//P.s i didnt use any of your code
//The form is going on my portfolio page.
nextBtns[0].addEventListener("click", function () {
  if (activeStep[0].value !== "") {
    span[0].innerHTML = "";

    if (activeStep[1].value === "") {
      span[1].innerHTML = "Please enter a valid email"
    } else {
      span[1].innerHTML = ""
      
      if (phone.value === "") {
        span[2].innerHTML = "Please enter your phone number"
        return false
    } else {
        span[2].innerHTML = "";
        formSteps[1].classList.add("form-step-active");
        formSteps[0].classList.remove("form-step-active");
        progressSteps[1].classList.add("progress-step-active");
        progress.style.width = "38%"
      }
    }
    
    
  } else {
    span[0].innerHTML = "Please enter your full name"
  }
})

 //for secondform next button & previous button
prevBtns[0].addEventListener("click", function () {
  formSteps[1].classList.remove("form-step-active")
  formSteps[0].classList.add("form-step-active")
  progressSteps[1].classList.remove("progress-step-active")
  progress.style.width = "0%"
})



nextBtns[1].addEventListener("click", function () {
  if (activeStep[3].value === "") {
    span[3].innerHTML = "Please enter a valid value";
    
  } else {
    span[3].innerHTML = ""
    if (activeStep[4].value === "") {
        span[4].innerHTML = "Please fill all fields"
        //return false
    } else {
      span[4].innerHTML = ""
      formSteps[2].classList.add("form-step-active")
      formSteps[1].classList.remove("form-step-active")
      progressSteps[2].classList.add("progress-step-active")
      progress.style.width = "65%"
      }
  }
})


// //for third form next button & previous button
prevBtns[1].addEventListener("click", function () {
  console.log("amazing")
  formSteps[2].classList.remove("form-step-active")
  formSteps[1].classList.add("form-step-active")
  progressSteps[2].classList.remove("progress-step-active")
  progress.style.width = "38%"
})


nextBtns[2].addEventListener("click", function () {
  if (activeStep[5].value !== "") {
    span[5].innerHTML = "";

    if (activeStep[6].value === "") {
      span[6].innerHTML = "Please enter a valid email"
    } else {
      span[6].innerHTML = ""

      if (activeStep[7].value === "") {
        span[7].innerHTML = "Please enter your website url"
        //return false
    } else {
        span[7].innerHTML = ""
        
        if (phone2.value === "") {
      span[8].innerHTML = "Please enter your phone number"
      console.log("help me")
      
        //return false
    } else {
          span[8].innerHTML = "";
          formSteps[3].classList.add("form-step-active");
          progressSteps[3].classList.add("progress-step-active")
          progress.style.width = "100%"
      }
      }
    }
    
    
  } else {
    span[5].innerHTML = "Please enter name"
  }
})


//for fourth form next button & previous button
prevBtns[2].addEventListener("click", function () {
  formSteps[3].classList.remove("form-step-active")
  progressSteps[3].classList.remove("progress-step-active")
  progress.style.width = "65%"
})


nextBtns[3].addEventListener("click", function (event) {
  if (activeStep[8].value !== activeStep[0].value) {
    span[9].innerHTML = "Please sign by entering your full name"
    event.preventDefault()
  } else {
    //event.preventDefault()
    alert("Form submitted successfully")
  }
})




/* //let formStepsNum = 0;

// nextBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     for (i = 0; i < activeStep.length; i++) {
//       if (activeStep[i].value == "") {
//         alert("fill all fields");
//         return false;
//       }
//     }
//     formStepsNum++;
//     updateFormSteps();
//     updateProgressbar();
//   });
// });

// prevBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     formStepsNum--;
//     updateFormSteps();
//     updateProgressbar();
//   });
// });

// function updateFormSteps() {
//   formSteps.forEach((formStep) => {
//     formStep.classList.contains("form-step-active") &&
//       formStep.classList.remove("form-step-active");
//   });

//   formSteps[formStepsNum].classList.add("form-step-active");
// }

// function updateProgressbar() {
//   progressSteps.forEach((progressStep, idx) => {
//     if (idx < formStepsNum + 1) {
//       progressStep.classList.add("progress-step-active");
//     } else {
//       progressStep.classList.remove("progress-step-active");
//     }
//   });

//   const progressActive = document.querySelectorAll(".progress-step-active");

//   progress.style.width =
//     ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
// }
 */
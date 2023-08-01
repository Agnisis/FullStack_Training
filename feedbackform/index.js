// const form=document.querySelector(".feedback-form")
// const p=document.querySelector("p")

// const usernamePattern=/^[a-z0-9]{6,10}$/
// const feedbackPattern=/^.{20,50}$/
// form.addEventListener("submit",(event)=>{

//     event.preventDefault()
//     const userResult=usernamePattern.test(form.username.value)

//     const feedbackResult=feedbackPattern.test(form.feedback.value)

//     if(userResult && feedbackResult){
//         p.setAttribute("class","success")
//         p.textContent="Feedback given"
//     }
//     else{
//         p.setAttribute("class","error")
//         p.textContent="please check username and feedback"

//     }
// })


const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const userResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);

    if(userResult && feedbackResult) {
        p.setAttribute("class","success");
        p.textContent="Feedback Submitted, Thank you";
    } else {
        p.setAttribute("class", "errror");
        p.textContent="Please check username and feedback again!";
    }
});
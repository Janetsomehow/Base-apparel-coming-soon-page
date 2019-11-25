const emailVal = document.getElementById("emailVal");

const preText = document.querySelector(".preText");

const validateIcon = document.querySelector(`.validateIcons`)

//event listeners and keyup//
emailVal.addEventListener("keyup", (e)=>{
    const isValidEmail = emailVal.checkValidity()

    if(isValidEmail){
        preText.textContent = "SUCCESS!"
        preText.style.color ="green"
        validateIcon.innerHTML = `<i class ='fas-fa-check-circle'></i>`;
        validateIcon.style.color="green";

    }else{
        preText.textContent = " please provide a valid email"
        pretext.style.color = "red"
        validateIcon.innerHTML = `<i class = 'fas-fa-exclamation-circle'></i>`;
        validateIcon.style.color="red";
    
    }
})

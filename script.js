let email = "abc@gmail.com";

function checkEmail() {
    let value = document.querySelector("#input").value;
    let errorr = document.querySelector(".error");
    errorr.innerHTML = ""; 
    if (value !== email) {
    errorr.innerHTML = "Invalid Email Address!";
         
    } 
  }

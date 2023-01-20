let userName = document.querySelector("#userName");
let userNameValue;
let errorMessageName = "";


userName.addEventListener("input", function () {
    userNameValue = userName.value;
    console.log(userNameValue.length);
 
    if (userNameValue.length > 13 ) {
   
        errorMessageName="Your name is too long"
    } else {errorMessageName=""}
    
    if (userNameValue.length === 0) {
     
         errorMessageName="This input shouldnt be empty"
    } else {errorMessageName=""}

    if (userNameValue.length < 2 ) {
     
        errorMessageName="Your name is too short"
   } else {errorMessageName=""}

    let errorMessageNameParagraph = document.querySelector("#warningForName")
    console.log(errorMessageNameParagraph);
    errorMessageNameParagraph.innerHTML = errorMessageName;


});

let userSurname = document.querySelector("#userSurname");
let userSurnameValue;
let errorMessageSurname = "";


userSurname.addEventListener("input", function () {
    userSurnameValue = userSurname.value;
    console.log(userSurnameValue.length);
 
    if (userSurnameValue.length < 2) {
   
        errorMessageSurname="Your last name is too short";
    } else {errorMessageSurname=""}

    if (userSurnameValue.length === 0) {
     
         errorMessageSurname="This input shouldnt be empty"
    } else {errorMessageSurname=""}
    let errorMessageSurnameParagraph = document.querySelector("#warningForSurname")
    console.log(errorMessageSurnameParagraph);
    errorMessageSurnameParagraph.innerHTML = errorMessageSurname;


});
let genderContainer = document.querySelector(".genderContainer");
let userGender="notSelected";
genderContainer.addEventListener("input", function () {
    userGender = document.querySelector("input[name='gender']:checked").value


    console.log(userGender);


}
);
let userAge = document.querySelector("#userAge");
let userAgeValue;
let errorMessageAge="";
userAge.addEventListener("input", function () {
     userAgeValue = userAge.value;
    //poka pustaya stroka
    console.log(userAgeValue.length);
   // if (userAgeValue.length < 3) { errorMessageAge="error,your age is too short"; }
    // if (userAgeValue.length > 2) { errorMessageAge="error,your age is too long "; }
   if (userAgeValue>30) {errorMessageAge="error,your age is too big";
}
   else {errorMessageAge=""}

    if (userAgeValue.length === 0) { errorMessageAge="this input shouldn`t be empty" 
}else {errorMessageAge=""}
    let errorMessageAgeParagraph = document.querySelector("#warningForAge")
    console.log(errorMessageAgeParagraph);
    errorMessageAgeParagraph.innerHTML = errorMessageAge;

});


let userConset = document.querySelector("#checkbox"); //soglasie pol´zovatelya,kvadrat,gde stavim galku.Budet proveryat´kvadrat (userConset)
let isChecked = false;
userConset.addEventListener("click", function () {
 
   if (isChecked===true ) {
    registerButton.removeAttribute("disabled");
   }else registerButton.setAttribute("disabled",true);
   isChecked = !isChecked;

});
let registerButton=document.querySelector("#register-button");
console.log(registerButton);
registerButton.addEventListener("click" , function(){
let userData= { 
    name:userNameValue,
    lastname:userSurnameValue,
    gender:userGender,
    age:userAgeValue,

 


}
console.log("userData",userData);
})

let form=document.querySelector("#form");
form.addEventListener("click",function(){
    if (isChecked===true 
        && errorMessageName === "" 
        && errorMessageSurname === "" 
        && errorMessageAge===""  
        && userGender!="notSelected") {
        registerButton.removeAttribute("disabled");
       }else registerButton.setAttribute("disabled",true);
});
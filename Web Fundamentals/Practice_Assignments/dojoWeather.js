let cookie = document.querySelector("#cookie")
let temp1 = document.querySelector(".degrees")

function dismiss(){
    cookie.remove()
};

function tempChange(){
    temp1.innerText =temp1.innerText* 1.8 +32;
}
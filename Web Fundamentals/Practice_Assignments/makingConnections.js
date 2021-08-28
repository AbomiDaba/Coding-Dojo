let profileName = document.querySelector(".user-name");

let toddPic = document.querySelector(".todd-pic");
let toddName = document.querySelector(".todd-name");

let philPic = document.querySelector(".phil-pic");
let philName = document.querySelector(".phil-name");

function nameChange() {
    profileName.innerText = "Abomi Daba";
};

function removeTodd() {
    toddName.remmove();
    toddPic.remove();
};

function removePhil() {
    philName.remove();
    philPic.remove();
};
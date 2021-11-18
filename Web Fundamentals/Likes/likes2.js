let num1 = 0;
let num2 = 0;
let num3 = 0;

let neilLikes = document.querySelector("#Neil-Likes")

let nicholeLikes = document.querySelector("#Nichole-Likes")

let jimLikes = document.querySelector("#Jim-Likes")

function addNeilLikes() {
    num1++
    neilLikes.innerText= num1 +" " + "likes(s)"
}

function addNicholeLikes() {
    num2++
    nicholeLikes.innerText= num2 +" " + "likes(s)"
}

function addJimLikes() {
    num3++
    jimLikes.innerText= num3 +" " + "likes(s)"
}
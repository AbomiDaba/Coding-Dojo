let num = 0;
let likes = document.querySelector(".count")

function addLikes() {
    num++
    likes.innerText= num +" " + "likes(s)"
}
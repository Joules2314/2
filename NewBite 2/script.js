const searchWrapper = document.querySelector('.search-box');
const inputBox = searchWrapper.querySelector('input');
let LinkTag = searchWrapper.querySelector('a');
let webLink;

inputBox.onkeyup =(e) =>{
    let userData = e.target.value;
    let emptyArray =[];



    if(e.key === "Enter") {
        if(userData === "One Piece"){
            window.open("Animes/OnePiece/honepiece.html");
        }

        if(userData === "Jujutsu Kaisen"){
            window.open("Animes/JujutsuKaisen/hjujutsunokaisen.html");
        }
    }
}
const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(img_number){
    const img = new Image();
    img.src = `images/${img_number}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER)+1;
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
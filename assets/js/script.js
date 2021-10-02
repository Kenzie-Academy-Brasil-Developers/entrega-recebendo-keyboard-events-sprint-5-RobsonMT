let imgPRF = "url('./assets/imgs/mario-"
let imgSRC = 'Down'
let imgICR = ".png')"

let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    //   console.log("keydown event\n\n" + "key: " + keyName);

    keyName === "ArrowUp" ? 
    ( boxTop -= 10,
        imgSRC = 'Up-R')
    : keyName === "ArrowRight" ? 
    ( boxLeft += 10,
        imgSRC = 'Right-run' )
    : keyName === "ArrowDown" ? 
    ( boxTop += 10,
        imgSRC = 'Down')
    : keyName === "ArrowLeft" ?
    ( boxLeft -= 10,
        imgSRC = 'Left-run')
    // : keyName == 0 || keyName == 32 ?
    // ( console.log("space"))
    : console.log("use the arrow keys to move the character")
        
    document.getElementById("box").style.backgroundImage = `${imgPRF}${imgSRC}${imgICR}`;
    document.getElementById("box").style.top = `${boxTop}px`;
    document.getElementById("box").style.left = `${boxLeft}px`;
});

window.document.body.style.width = '100vw';
window.document.body.style.height = '100vh';
window.document.body.style.margin = 'auto';
window.document.body.style.backgroundImage = "url('./assets/imgs/bg.png')";
document.getElementById("box").style.backgroundImage = `${imgPRF}${imgSRC}${imgICR}`;
document.getElementById("box").style.backgroundRepeat = "no-repeat";
document.getElementById("box").style.backgroundPosition = "center";
document.getElementById("box").style.backgroundSize = "35px";

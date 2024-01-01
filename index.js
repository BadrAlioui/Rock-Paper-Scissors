let max = 3;
let min = 1;

let h1 = document.querySelector('h1');

let randomNumber1 = Math.floor((Math.random() * max) + 1);
let image1 = './dice'+ randomNumber1 + '.png';
let imagePlayer1 = document.querySelectorAll('img')[0].setAttribute('src', image1)


let randomNumber2 = Math.floor((Math.random() * max) + 1);
let image2 = './dice'+ randomNumber2 + '.png';
let imagePlayer2 = document.querySelectorAll('img')[1].setAttribute('src', image2)

if (randomNumber1 === 1 && randomNumber2 === 2){
    h1.textContent = '🚩 Player1 wins!';

}else if (randomNumber1 === 2 && randomNumber2 === 1){
    h1.textContent = '🚩 Player2 wins!';

}else if (randomNumber1 === 2 && randomNumber2 === 3){
    h1.textContent = '🚩 Player1 wins!';
}

else if (randomNumber2 === 2 && randomNumber1 === 3){
    h1.textContent = '🚩 Player2 wins!';
}

else if(randomNumber1 === 1 && randomNumber2 === 3){
    h1.textContent = '🚩 Player2 wins!';
}

else if(randomNumber2 === 1 && randomNumber1 === 3){
    h1.textContent = '🚩 Player1 wins!';
}

else{
    h1.textContent = 'Draw!';
}

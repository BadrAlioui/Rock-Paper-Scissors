const max = 3;

const h1 = document.querySelector('h1');
const img1 = document.querySelectorAll('img')[0];
const img2 = document.querySelectorAll('img')[1];

function refaire() {
    const randomNumber1 = Math.floor(Math.random() * max + 1);
    const randomNumber2 = Math.floor(Math.random() * max + 1);

    img1.setAttribute('src', `./dice${randomNumber1}.png`);
    img2.setAttribute('src', `./dice${randomNumber2}.png`);

    if (randomNumber1 === 1 && randomNumber2 === 2) {
        h1.textContent = '🚩 Player1 wins!';
    } else if (randomNumber1 === 2 && randomNumber2 === 1) {
        h1.textContent = '🚩 Player2 wins!';
    } else if (randomNumber1 === 2 && randomNumber2 === 3) {
        h1.textContent = '🚩 Player1 wins!';
    } else if (randomNumber2 === 2 && randomNumber1 === 3) {
        h1.textContent = '🚩 Player2 wins!';
    } else if (randomNumber1 === 1 && randomNumber2 === 3) {
        h1.textContent = '🚩 Player2 wins!';
    } else if (randomNumber2 === 1 && randomNumber1 === 3) {
        h1.textContent = '🚩 Player1 wins!';
    } else {
        h1.textContent = 'Draw!';
    }
}

refaire();

h1.addEventListener('click', refaire);

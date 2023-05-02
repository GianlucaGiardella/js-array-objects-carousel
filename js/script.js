//Array con oggetti OK
//Creare un ciclo che aggiunge gli oggetti dell'array nell'HTML e assegna active al primo OK
//Al click del bottome aggiunge "active" all'elemento succ o precedente (dipende dal bottone) OK
//Bonus 1 aggiungere un timing per spostare l'active alle immagini tramite un bottone e un altro che lo ferma
//Bonus 2 bottone che inverte l'ordine

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const list = document.querySelector(".list");
const foreground = document.querySelector(".foreground");

images.forEach((game) => {
    list.innerHTML += `<img src="${game.image}" class="${images[0] === game ? "active" : ""}">`;
    foreground.innerHTML += `
                                <div class="cover ${images[0] === game ? "active" : ""}">
                                    <img src="${game.image}">
                                    <div>
                                        <h2>${game.title}</h2>
                                        <p>${game.text}</p>
                                    </div>
                                </div>
                                `;
});

const listGames = document.querySelectorAll(".list img");
const foregroundGames = document.querySelectorAll(".foreground .cover");

let activeGame = 0;

function goUp() {
    listGames[activeGame].classList.remove("active");
    foregroundGames[activeGame].classList.remove("active");
    activeGame--;
    if (activeGame < 0) {
        activeGame = images.length-1
    }
    listGames[activeGame].classList.add("active");
    foregroundGames[activeGame].classList.add("active");
}

function goDown() {
    listGames[activeGame].classList.remove("active");
    foregroundGames[activeGame].classList.remove("active");
    activeGame++
    if (activeGame > images.length-1) {
        activeGame = 0;
    }
    listGames[activeGame].classList.add("active");
    foregroundGames[activeGame].classList.add("active");
}
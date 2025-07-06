
const joueurs = ['haut', 'bas', 'gauche', 'droite'];
const Xpositioncarte = ['44.5', '10', '44.5', '79']
const Ypositioncarte = ['71', '38', '6', '37']
const tourncartes = ['0', '90', '-180', '-90']
const valeurs = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const couleurs = ['♠', '♥', '♦', '♣'];
let nombreDePioches = 0;
let i = 0

function GenerCarte() {
  for (let j = 0; j < joueurs.length; j++) {
    setTimeout(() => {
      const numbercarte = valeurs[Math.floor(Math.random() * valeurs.length)];
      const signecarte = couleurs[Math.floor(Math.random() * couleurs.length)];
      const contenu = `${numbercarte} ${signecarte}`;

      const carte = document.createElement('div');
      carte.className = 'cart';
      carte.textContent = contenu;
      carte.style.display = 'flex';
      carte.style.position = 'absolute';
      carte.style.left = `calc(${Xpositioncarte[j]}% + ${nombreDePioches * 10}px)`;
      carte.style.top = `calc(${Ypositioncarte[j]}%`;
      carte.style.transform = `rotate(${tourncartes[j]}deg)`;
      carte.style.lineHeight = '134px';
      carte.style.margin = '5px';
      carte.style.gap = '15px';

      document.querySelector('.container').appendChild(carte);
    }, j * 200); // ⏱️ délai progressif : 0s, 1s, 2s, 3s...
    nombreDePioches++;
  }
}


function distribuerCartes() {
  i = (i + 1) %4
}

// Lancer automatiquement dès qu'on clique sur le deck
console.log(document.querySelector('.deck-animated'))
document.querySelector('.deck-animated').addEventListener('click', () => {
  document.getElementsByClassName("titre")[0].style.display = "none";
  distribuerCartes()
  GenerCarte()
  console.log(document.getElementsByClassName("titre"))
  document.getElementsByClassName("titre")[0].style.display = "none";
  document.getElementsByClassName("cart")[0].style.display = "block";

  // document.getElementsByClassName("stop-button")[0].style.display = "block";
});

function genererTroisPrenomsDansDivs() {
console.log('genererTroisPrenomsDansDivs');
const prenoms = ["Emma", "Lucas", "Chloé", "Léo", "Manon", "Noah", "Lina", "Hugo", "Inès", "Nathan", "Omare", "Moamed", "Ilan", "Matt", "maily"];
const prenom1 = prenoms[Math.floor(Math.random() * prenoms.length)];
const prenom2 = prenoms[Math.floor(Math.random() * prenoms.length)];
const prenom3 = prenoms[Math.floor(Math.random() * prenoms.length)];
document.getElementById("haut").innerHTML = prenom1
document.getElementById("gauche").innerHTML = prenom2
document.getElementById("droite").innerHTML = prenom3
}
genererTroisPrenomsDansDivs();

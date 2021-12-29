// MENU BURGER
function toggleMenu () {  
    const navbar = document.querySelector(".navbar");
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", (e) => {    
      navbar.classList.toggle("show-nav");});  
}

toggleMenu();
  
// BOUTON ASCENSEUR

//On crée une variable bouton
button = document.getElementById("button-top");

// scrollTop = distance entre le haut de l'élément et la partie la plus haute de son contenu visible. 

// Si distance de plus de 500px depuis le haut du body, alors on fait apparaître le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
  {button.style.display = "block";} 
 
  else {button.style.display = "none";}
}

scrollFunction ();

// scrollTop de l'élément = 0 => retour au début du contenu de l'élément (ici, c'est le body = haut de la page)
function topFunction() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE and Opera
}

topFunction ();

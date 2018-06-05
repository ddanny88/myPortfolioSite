const hamburgerMenu = document.querySelector("#hamburger");
const sideMenu = document.querySelector("#side_bar_menu");
const main = document.querySelector(".site_container");


hamburgerMenu.addEventListener("click", function(e){
   sideMenu.classList.toggle('active');
   e.stopPropagation();
});

// main.addEventListener("click", function(){
    
// });
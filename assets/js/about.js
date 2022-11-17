/**********  DEFILEMENT PARTIE TESTIMONIALS **************/

/******** DECLARATION DES VARIABLES ************/
var customersInfos = document.getElementById("customers-infos");
var customerinfos = document.querySelector(".customer-infos");
var prevButton = document.querySelector(".chevron-left i");
var nextButton = document.querySelector(".chevron-right i");

/******** FONCTION QUI CONTIENT NOS ABONNEMENTS ************/

var ScrollTestimonials = () =>{
     nextButton.addEventListener("click", () => {
     var customerinfosWidth = customerinfos.clientWidth; //on recupère la largeur de l'élément
     customersInfos.scrollLeft += customerinfosWidth; //on défile vers l'avant en ajoutant la valeur de la largeur de l'élément 
     });
     
     prevButton.addEventListener("click", () => {
     var customerinfosWidth = customerinfos.clientWidth;
     customersInfos.scrollLeft -= customerinfosWidth;  //on défile vers l'arrière en ajoutant la valeur de la largeur de l'élément 
     }); 
}

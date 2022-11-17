/**********  DECLENCHEMENT DE L'ANIMATION DES PROGRESS-BAR LORS DU CLIQUE DE LA SECTION RESUME **************/

/******** DECLARATION DES VARIABLES ************/
var resume = document.querySelectorAll("ul.menu-lists li")[2];
var lists = document.querySelectorAll("ul.menu-lists li");
var percentage_Bar = document.querySelectorAll(".percentage-bar ");

/******** FONCTION QUI CONTIENT NOTRE ABONNEMENT ************/

   var AnimateProgressBar = () =>{
        resume.addEventListener("click", ()=>{
             for (let index = 0; index < percentage_Bar.length; index++) {
                 const element = percentage_Bar[index];  
                if (element.style.animation == "") {
                     element.style.animation = `load_${index} 3s normal forwards`;
                } 
            } 
        })
        
    } 




    
    
    
     
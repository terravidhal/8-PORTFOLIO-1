/**********  NAVIGATION DANS LES PROJETS DE LA SECTION PORTFOLIO **************/

/******** DECLARATION DES VARIABLES ************/
var Category = document.querySelectorAll(".language");
var ALL_category = document.querySelectorAll(".language")[0];
var html5_css3_category = document.querySelectorAll(".language")[1];
var JavaScript_category = document.querySelectorAll(".language")[2];
var php_category = document.querySelectorAll(".language")[3];
var project = document.querySelectorAll(".project");
var projects = document.querySelector(".projects");
var h2 = document.createElement("h2");
h2.innerHTML = 'SECTION VIDE !';




/******** FONCTION QUI  ATTRIBUE LA CLASSE ".ACTIVE" ET AFFICHE LES PROJETS CORRESPONDANTS A CHAQUE CATEGORIE DE LANGAGE ************/

var showLanguagesprojects = () =>{
    
    //ABONNEMENT 1 : CATEGORIE ALL
    ALL_category.addEventListener("click", (ev) => {

        h2.style.display = "none";

        for (let index = 0; index < project.length; index++) {
            const element = project[index];
            element.style.display = "block";
        }
        ev.target.classList.add("active2"); 
        var Position = 0; 
        hideActive(Position); 
    }); 

    //ABONNEMENT 2 : CATEGORIE HTML5/CSS
    html5_css3_category.addEventListener("click", (ev) => {

        projects.appendChild(h2); 
        h2.style.display = "block";

        for (let index = 0; index < project.length; index++) {
            const element = project[index];

            if (element.classList.contains("ht")) {
                element.style.display = "block";
                h2.style.display = "none";
            } else {
                element.style.display = "none";
            } 
        }
        ev.target.classList.add("active2"); 
        var Position = 1; 
        hideActive(Position); 
    }); 

    //ABONNEMENT 3 : CATEGORIE JAVASCRIPT
    JavaScript_category.addEventListener("click", (ev) => {

        projects.appendChild(h2);
        h2.style.display = "block";
        
        for (let index = 0; index < project.length; index++) {
            const element = project[index];

            if (element.classList.contains("js")) {
                element.style.display = "block";
                h2.style.display = "none";
            } else {
                element.style.display = "none";
            }
        }
        ev.target.classList.add("active2"); 
        var Position = 2; 
        hideActive(Position); 
    });   

    //ABONNEMENT 4 : CATEGORIE PHP
    php_category.addEventListener("click", (ev) => {

        projects.appendChild(h2);
        h2.style.display = "block";
        
        console.log(getComputedStyle(h2).display);
        for (let index = 0; index < project.length; index++) {
            const element = project[index];

            if (element.classList.contains("ph")) {
                element.style.display = "block";
                h2.style.display = "none";
            } else {
                element.style.display = "none";
            }
        }
        ev.target.classList.add("active2"); 
        var Position = 3; 
        hideActive(Position); 
    });     
}


/******** FONCTION QUI SUPPRIME LA CLASSE ".ACTIVE" SUR LES CATEGORIES DE LANGAGES ************/
var hideActive = (Position) =>{
    for (let index = 0; index < Category.length; index++) {
        const element = Category[index];
        if(Position !== index){
            element.classList.remove("active2");
        }
    }
}








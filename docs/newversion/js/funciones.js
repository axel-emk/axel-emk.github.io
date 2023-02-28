// Cambio img
// ---------------------------------------------------------------------------------------------------
let imgLogo = "logo-ligth";
let imgBehance = "logo-behance-color";
let imgLinkedin = "logo-linkedin-dark";
let imgGithub = "logo-github-black";

const logos = () => {
    const logoNigth = document.getElementById('logo');
    if(imgLogo == 'logo-ligth'){
        logoNigth.src=('./img/logo-dark.svg');
        imgLogo = 'logo-dark';  
    }else{
        logoNigth.src=('./img/logo-ligth.svg');
        imgLogo = 'logo-ligth';          
    }  
};

// ClassName
// ---------------------------------------------------------------------------------------------------
const cambiarClassName = () =>{
    // Elementos ClassName - ID
    const navbar = document.getElementsByClassName('navbar');
    const lightColor = document.getElementsByClassName('bg-light');
    const cardLigth = document.getElementsByClassName('text-bg-light');
    const textLigth = document.getElementsByClassName('text-ligth');  
    const textDark = document.getElementsByClassName('text-dark' );  
    const textMuted = document.getElementsByClassName('text-muted');  
    const textBlanco = document.getElementsByClassName('text-blanco');  
    const gradientNight = document.getElementsByClassName('gradient-night');  
     
    const removeDark = document.getElementsByClassName('carousel' );  
    const nigthLink = document.querySelectorAll("a[id='nigthLink']");
    
    // Ciclo For para poder seleccionar todas las class
    for(let i = 0; i < navbar.length; i++ )
    {
        navbar[i].classList.toggle('navbar-dark');        
    };
    for(let i = 0; i < lightColor.length; i++ )
    {
        lightColor[i].classList.toggle('bg-dark');        
    };

    for(let i = 0; i < cardLigth.length; i++ )
    {
        cardLigth[i].classList.toggle('text-bg-dark');        
    };
    
    for(let i = 0; i < nigthLink.length; i++ )
    {
        nigthLink[i].classList.toggle('skyLink');
    };

    for(let i = 0; i < removeDark.length; i++ )
    {
        removeDark[i].classList.toggle('carousel-dark');
    };
    
    for(let i = 0; i < textLigth.length; i++ )
    {
        // links
        textLigth[i].classList.toggle('text-nigth');
    };
    for(let i = 0; i < textDark.length; i++ )
    {
        // textos
        textDark[i].classList.toggle('text-white');
    };
    for(let i = 0; i < textMuted.length; i++ )
    {
        // textos muted
        textMuted[i].classList.toggle('text-white');
    };
    for(let i = 0; i < textBlanco.length; i++ )
    {
        // textos blanco
        textBlanco[i].classList.toggle('text-noche');
    };
    for(let i = 0; i < gradientNight.length; i++ )
    {
        // Gradient Night
        gradientNight[i].classList.toggle('gradient-light');
    };

    return logos();
    

};

//  Toggle
// ---------------------------------------------------------------------------------------------------
const toggle = document.getElementById('toggle');
toggle.onclick = () => {
    return cambiarClassName();
};


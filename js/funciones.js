// Cambio img
// ---------------------------------------------------------------------------------------------------
let imgLogo = "logo-ligth";
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
    const lightColor = document.getElementsByClassName('bg-light');
    const textLigth = document.getElementsByClassName('text-ligth');  
    const textDark = document.getElementsByClassName('text-dark' );  
    const btnLigth = document.querySelectorAll("a[id='noche']");
    // Ciclo For para poder seleccionar todas las class
    for(let i = 0; i < lightColor.length; i++ )
    {
        lightColor[i].classList.toggle('bg-dark');        
    };
    
    for(let i = 0; i < btnLigth.length; i++ )
    {
        btnLigth[i].classList.toggle('btn-dark');
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

    return logos();
};

//  Toggle
// ---------------------------------------------------------------------------------------------------
const toggle = document.getElementById('toggle');
toggle.onclick = () => {
    return cambiarClassName();
};
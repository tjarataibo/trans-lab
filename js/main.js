// saldo = () => 
// {
//     document.getElementById("").innerHTML
// }

// tarifa = () => 
// {
//     document.getElementById("").innerHTML
// }

// perfil = () => 
// {
//     document.getElementById("").innerHTML
// }

// preguntas = () => 
// {
//     document.getElementById("#navbarToggleExternalContentTwo").innerHTML
// }

// home = () => 
// {
//     document.getElementById("").innerHTML
// }


//con esto tomo el numero de codigo que ingrese el usuario
let input = document.querySelector('input');



        // 13 is enter
          // code for enter
          input.addEventListener("keypress",(enter)=>{
            let key = enter.which || enter.keyCode;
            if (key === 13) {
            let num = input.value;
              //  getBip(num => {

          fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`) 
            .then(response => response.json())
            .then(data => {
              
                console.log(data) 
            })   
        }    
    })
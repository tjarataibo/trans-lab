let boton = document.getElementById('btn-login');

function saveUserPassword() { //funcion para guardar comentario
    //validación inputs, usamos if para que no se imprima un mensaje vacío
    if((document.getElementById('loginUsername').value === '') || (document.getElementById('loginPassword').value ==='')) {
      alert('Tu contraseña debe contener sólo números, con un máximo de 8 carácteres')
    } else{
      let loginUsername = document.getElementById('loginUsername').value;
      let loginPassword = document.getElementById('loginPassword').value;
      localStorage.setItem(loginUsername,loginPassword); //En este punto guardo nombre y comment en mi local storage
    }
  }
boton.addEventListener('click', saveUserPassword());
  
  function printUserPassword() { //funcion para imprimir el mensaje en la pantalla
   let comentarioTexto = localStorage.getItem(loginUsername);
  
  //Aquí se le da funcionalidad a los div, h5 y p, en los cuales se podrá agregar "nombre", "título" y "comentario".
      let singleComment = document.createElement('div');
  
      let pComment = document.createElement('p');
      let nodeP = document.createTextNode(comentarioTexto);
     
      pComment.appendChild(nodeP);
      singleComment.appendChild(pComment);
      
      document.getElementById('mailImpreso').appendChild(singleComment);
  
  
    }
  


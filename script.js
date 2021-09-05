//input elements
let inputName = document.getElementById("inputName");
let inputLastName = document.getElementById("inputLastName");
let inputDni = document.getElementById("inputDni");
let inputPhone = document.getElementById("inputPhone");
let inputMail = document.getElementById("inputMail");
let btnSubmit = document.getElementById("btnSubmit");
let form1 = document.getElementById("form1");
let textarea1 = document.getElementById("textarea1");
let unorderedList = document.getElementById("ulDatos");
let mostrarLista = document.getElementById("mostrarLista");
let limpiarLista = document.getElementById("limpiarLista");

//Objeto datos de usuario
let datosUsuario = [];

btnSubmit.onclick = (event) => {
  event.preventDefault();
  guardarDatos();

  //form1.reset();
};

//Guardar datos dentro de local storage
const guardarDatos = () => {
  datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
  datosUsuario.push({
    nombre: inputName.value,
    apellido: inputLastName.value,
    dni: inputDni.value,
    phone: inputPhone.value,
    mail: inputMail.value,
  });

  localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
};

mostrarLista.onclick = (evento) => {
  crearLi();
};

const crearLi = () => {
  let datosDeUsuarios;
  datosDeUsuarios = JSON.parse(localStorage.getItem("datosUsuario"));
  for (let loop = 0; loop < datosDeUsuarios.length; loop++) {
    let newLi = document.createElement("li");
    newLi.textContent =
      datosDeUsuarios[loop].nombre +
      " " +
      datosDeUsuarios[loop].apellido +
      " : " +
      datosDeUsuarios[loop].phone +
      " / " +
      datosDeUsuarios[loop].mail;
    unorderedList.appendChild(newLi);
  }
};

limpiarLista.onclick = (evento) => {
  console.log(unorderedList.childElementCount);
  if (unorderedList.childElementCount !== 0) {
    for (let loop = 0; loop <= unorderedList.childElementCount + 1; loop++) {
      unorderedList.removeChild(unorderedList.lastChild);
    }
    unorderedList.removeChild(unorderedList.lastChild);
  }
};

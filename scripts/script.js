const APIUSER = "https://6362ad8466f75177ea35bc2e.mockapi.io/users";
const container = document.getElementById("results");
//variables globales pa usar despue'
let id = undefined;
let userInfo = undefined;
let idFilter = undefined;


//funcion mostrar
function showApi(array){
    for(let elements of array){
    container.innerHTML += `
    <br>
    <li>ID: ${elements.id}</li>
    <li>NAME: ${elements.name}</li>
    <li>LASTNAME: ${elements.lastname}</li>
    <br> `
}}

//fetch
document.addEventListener("DOMContentLoaded", async () => {

    const response = await fetch(APIUSER);
    const json = await response.json();
  
    userInfo = json;
    showApi(userInfo)
})


//FILTRANDO LA BUSQUEDA
document.getElementById("btnGet1").addEventListener("click", (e)=>{
    e.preventDefault;
search = document.getElementById("inputGet1Id").value; 
idFilter = userInfo.filter(({id})=>{
    return id.indexOf(search) > -1;
})
showApi(idFilter)
})


// AGREGANDO A LA LISTA

document.getElementById('btnPost').addEventListener('click', (e)=>{
    e.preventDefault;
    

})

// MODIFICANDO LA LISTA
document.getElementById('btnPut').addEventListener('click', (e)=>{
    e.preventDefault;


})

//ELIMINANDO ELEMENTO DE LA LISTA
document.getElementById('btnDelete').addEventListener('click', (e)=>{
    e.preventDefault;


})
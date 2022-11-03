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
    document.getElementById('btnDelete').removeAttribute('disabled')
    document.getElementById('btnPut').removeAttribute('disabled')
    document.getElementById('btnPost').removeAttribute('disabled')
    container.innerHTML = ``;
search = document.getElementById("inputGet1Id").value; 
idFilter = userInfo.filter(({id})=>{
    return id.indexOf(search) > -1;
})
showApi(idFilter)
})


// AGREGANDO A LA LISTA

document.getElementById('btnPost').addEventListener('click', async(e)=>{
    e.preventDefault;
    
    const name = document.getElementById("inputPostNombre");
    const lastname = document.getElementById("inputPostApellido");
    
    const newPost = {
        name: name.value,
        lastname: lastname.value,
    }
    console.log(newPost);

    fetch(APIUSER, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res =>res.json())
        .then(data => console.log(data))

          })

// MODIFICANDO LA LISTA
document.getElementById('btnPut').addEventListener('click', async(e)=>{
    e.preventDefault;


})

//ELIMINANDO ELEMENTO DE LA LISTA
document.getElementById('btnDelete').addEventListener('click', async(e)=>{
    e.preventDefault;
    let id = document.getElementById('inputDelete').value
    fetch(`${APIUSER}/${id}`, {
        method: 'DELETE',
    })
        
        .then(response => console.log(response.status))

})
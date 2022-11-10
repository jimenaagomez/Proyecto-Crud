const APIUSER = "https://6362ad8466f75177ea35bc2e.mockapi.io/users";
const container = document.getElementById("results");
//variables globales pa usar despue'
let id = undefined;
let userInfo = undefined;
let idFilter = undefined;


//funcion mostrar
function showApi(array){
    container.innerHTML = ``
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

// funcion para remover disabled 
function removeDisabled(buttons){
    document.getElementById(buttons).removeAttribute('disabled')
}


//FILTRANDO LA BUSQUEDA
document.getElementById("btnGet1").addEventListener("click", (e)=>{
    e.preventDefault;
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
    if (name.value && lastname.value) {
        
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
            .then(data =>{ userInfo.push(data);
            showApi(userInfo)})
    }

    else {
        
        name.value = ''
        lastname.value = ''

    }
          })

// MODIFICANDO LA LISTA 

// DENTRO DEL MODAL
document.getElementById('btnSendChanges').addEventListener('click', async(e)=>{
    let idChanges = parseInt(document.getElementById('inputPutId').value)
    const name = document.getElementById("inputPutNombre");
    const lastname = document.getElementById("inputPutApellido");
   
    const newPut = {
        name: name.value,
        lastname: lastname.value,
    }
    console.log(newPut);

    if(document.getElementById('inputPutApellido').value  && document.getElementById('inputPutNombre').value){
        
        fetch(`${APIUSER}/${idChanges}`, {
            method: 'PUT',
            body: JSON.stringify(newPut),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res =>res.json())
            .then(data => {  userInfo.slice(data)
                console.log(userInfo)
            showApi(userInfo) })
    

    
            
    }

})

//ELIMINANDO ELEMENTO DE LA LISTA
document.getElementById('btnDelete').addEventListener('click', async(e)=>{
    e.preventDefault;
    
    let id = document.getElementById('inputDelete').value
    fetch(`${APIUSER}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
        
        .then(response => console.log(status))

})
 

// Habilitando btns a traves de escuchar a los inputs 

document.getElementById('inputPostNombre').addEventListener('input', ()=>{
    removeDisabled('btnPost')
})

document.getElementById('inputPostApellido').addEventListener('input', ()=>{
    removeDisabled('btnPost')
})

document.getElementById('inputDelete').addEventListener('input', ()=>{
    removeDisabled('btnDelete')
})

document.getElementById('inputPutId').addEventListener('input', ()=>{
    removeDisabled('btnPut')
})

document.getElementById('inputPutNombre').addEventListener('input', ()=>{
    removeDisabled('btnSendChanges')
})

document.getElementById('inputPutApellido').addEventListener('input', ()=>{
    removeDisabled('btnSendChanges')
})

document.getElementById('inputDelete').addEventListener('input', ()=>{
    removeDisabled('btnDelete')
})


// faltaria el feedback negativo en caso de errores 


  
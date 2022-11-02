const APIUSER = "https://6362ad8466f75177ea35bc2e.mockapi.io/users";
const container = document.getElementById("results");



function showApi(array){
    for(let elements of array){
    container.innerHTML += `
    <br>
    <li>ID: ${elements.id}</li>
    <li>NAME: ${elements.name}</li>
    <li>LASTNAME: ${elements.lastname}</li>
    <br> `
}}

document.addEventListener("DOMContentLoaded", async () => {

    const response = await fetch(APIUSER);
    const json = await response.json();
  
    userInfo = json;
    showApi(userInfo)
    console.log(userInfo)
})
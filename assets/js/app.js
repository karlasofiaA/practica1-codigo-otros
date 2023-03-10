/* Buscamos nos situamos en la base de datos en el apartado de
usuarios y a partir de ese punto y mediante una promesa se buscan
los datos de un usuario en específico. 
Si se consume la promesa mostrará los datos mediante la API y en consola
Si la promesa es rechazada debe llamar a la función handleError*/

const baseEndpoint = 'https://api.github.com';  
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se colocó un "."
const $b = document.querySelector('.blog'); //Se cambió y se puso un "."
const $l = document.querySelector('.location');

async function displayUser(username) { //Se agregó la palabra "async"
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  data = await response.json();  //Se agregó esta línea para usar la const response
  console.log(data);
  //En las siguientes tres líneas se cambia '' por ``
  $b.textContent = `${data.blog}`;   
  $n.textContent = `${data.name}`; 
  $l.textContent = `${data.location}`;
  return response
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //Agregar signo $ del selector
}
 
displayUser('stolinski').catch(handleError()); //Mandar llamar a la función con () y parámetro
//No supe cómo trabaja el .catch en esta promesa

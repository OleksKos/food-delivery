const restourant = 'tanuki';
const cardMenu = document.querySelectorAll('.cards-menu');


const renderItems = (data) => {
  data.forEach(element => {

  });
}

fetch(`./db/${restourant}.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  });
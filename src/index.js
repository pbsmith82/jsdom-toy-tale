let addToy = false
const toyUrl = 'http://localhost:3000/toys' 


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
const toyImageContainer = document.querySelector("#toy-collection")
function createCard(object){
  const card = document.createElement('div')
    card.className = "card"
    card.id = object.id
    card.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hWyJoTGgnDgZFPkpS9JY6x6L2MeyJDzfgQ&usqp=CAU" style="width:50px;height:50px;display:block;margin-left:auto;margin-right: auto;width: 25%;"> <br> Like This one <br> <img src="${object.image}" class="toy-avatar"> <br> ID: ${object.id} <br> Name: ${object.name} <br> Likes: ${object.likes}` 
    toyImageContainer.append(card)
}
  fetch(toyUrl)
    .then(function(response){
      return response.json()
    }).then(function(json){
      renderCards(json)
    })
  function renderCards(toys){
  toys.forEach(object => {
    createCard(object)
  })
  }
  const addToyForm = document.querySelector(".add-toy-form")
  addToyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      image: e.target[1].value,
      likes: "0" 
    };
    
    let configData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
  
  
  
    fetch("http://localhost:3000/toys", configData)
      .then(function(response) {
        return response.json();
      }).then(function(object) {
        createCard(object)
    
  })  
})
 const cardid = document.querySelector("#toy-collection")
 cardid.addEventListener("click", (e) => {
  fetch(toyUrl + `/${e.target.parentElement.id}`)
  .then(function(response){
    return response.json()
  }).then(function(json){
     increaseLikes(json)
  })
  function increaseLikes(object){
    let formData = {
      name: object.name,
      image: object.image,
      likes: parseInt(object.likes) + 1 
    };
    
    let configData = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
  
  
  
    fetch(toyUrl + `/${object.id}`, configData)
      .then(function(response) {
        return response.json();
      }).then(function(object) {
        const updateCard = document.getElementById(object.id) 
        updateCard.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hWyJoTGgnDgZFPkpS9JY6x6L2MeyJDzfgQ&usqp=CAU" style="width:50px;height:50px;display:block;margin-left:auto;margin-right: auto;width: 25%;"> <br> Like This one <br> <img src="${object.image}" class="toy-avatar"> <br> ID: ${object.id} <br> Name: ${object.name} <br> Likes: ${object.likes}`
    
  })  

  }
  
 })
})

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
  fetch(toyUrl)
    .then(function(response){
      return response.json()
    }).then(function(json){
      renderCards(json)
    })
  function renderCards(toys){
  toys.forEach(object => {
    const card = document.createElement('div')
    card.className = "card"
    card.innerHTML = `<img src="${object.image}" class="toy-avatar"> <br> ID: ${object.id} <br> Name: ${object.name} <br> Likes: ${object.likes}` 
    toyImageContainer.append(card)
  })
  }
})

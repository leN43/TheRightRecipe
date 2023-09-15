// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

const button  = document.getElementById("searchBtn");
const result  = document.getElementById("result");
const viewBtn =document.getElementById("view-recipe");
const recipe  =document.getElementById("recipe");
const hideBtn =document.getElementById("hide-recipe");
button.addEventListener("click", () => {
  // Get the ingredient value inside the event listener
  let ingredient = document.getElementById("ingredient").value;

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=ef3e2f2bdda94aa694b44c764cabbf8f`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Assuming data is an array, loop through the results
     console.log(data[0].title);
     document.getElementById("ingredient").value = ""
    })
});
viewBtn.addEventListener("click",() => {
  recipe.style.display = "block";
});
hideBtn.addEventListener("click",() => {
  recipe.style.display = "none";
});

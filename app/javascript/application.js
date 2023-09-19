const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  // Get the ingredient value inside the event listener
  let ingredient = document.getElementById("ingredient").value;

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=50&apiKey=ef3e2f2bdda94aa694b44c764cabbf8f`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        // No recipes found
        result.innerHTML = "<p>No recipes found.</p>";
        return;
      }

      // Use the second API endpoint to fetch details and filter by prep time
      const recipeIds = data.map((recipe) => recipe.id);
      const recipeDetailsUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.join(",")}&includeNutrition=false&apiKey=ef3e2f2bdda94aa694b44c764cabbf8f`;

      fetch(recipeDetailsUrl)
        .then((response) => response.json())
        .then((detailsData) => {
          // Filter recipes based on preparation time
          const filteredRecipes = detailsData.filter(
            (recipe) => recipe.readyInMinutes <= 30
          );

          if (filteredRecipes.length === 0) {
            // No recipes found within the specified time frame
            result.innerHTML = "<p>No recipes found within 30 minutes or less.</p>";
            return;
          }

          // Select a random index within the filteredRecipes array
          const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
          const randomRecipe = filteredRecipes[randomIndex];

          const recipeTitle = randomRecipe.title;
          const recipeImg = randomRecipe.image;
          const TimePrep = randomRecipe.readyInMinutes;
          const extendedIngredients = randomRecipe.extendedIngredients;
          const recipeInstructions = randomRecipe.instructions;

          // Create an unordered list (ul) for ingredients
          const ulList = document.createElement("ul");

          // Iterate through extendedIngredients and add them to the ulList
          extendedIngredients.forEach((ingredient) => {
            const liItem = document.createElement("li");
            liItem.innerText = ingredient.original;
            ulList.appendChild(liItem);
          });

          result.innerHTML = `
            <img src=${recipeImg}>
            <div class="details mt-2">
              <h2>${recipeTitle}</h2>
              <h4>Time prep: ${TimePrep} min</h4>
            </div>
            <div id="ingredient-con">
              ${ulList.outerHTML} <!-- Insert the ul as HTML -->
            </div>
            <div id="recipe">
              <button id="hide-recipe">X</button>
              <button id="like-recipe"><i class="fa-regular fa-heart"></i></button>
              <p id="instructions">${recipeInstructions}</p>
            </div>
            <button class="btn btn-outline-primary" id="view-recipe">View Recipe</button>
          `;

          document.getElementById("ingredient").value = "";
        });
    });
});

// Event delegation for dynamically created buttons
document.body.addEventListener("click", (event) => {
  if (event.target.id === "hide-recipe") {
    // Handle click on "hide-recipe" button
    recipe.style.display = "none";
  } else if (event.target.id === "view-recipe") {
    // Handle click on "view-recipe" button
    recipe.style.display = "block";
  }
  });

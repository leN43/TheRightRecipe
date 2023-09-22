const button = document.getElementById("searchBtn");
const result = document.getElementById("result");
let recipeTitle ;
let recipeImg ;
let TimePrep ;
let extendedIngredients ;
let recipeInstructions ;
let recipeId ;
let ingredientArray = [] ;

button.addEventListener("click", () => {
  // Get the ingredient value inside the event listener
  let ingredient = document.getElementById("ingredient").value;

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=20&apiKey=ef3e2f2bdda94aa694b44c764cabbf8f`;

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

           recipeTitle = randomRecipe.title;
           recipeImg = randomRecipe.image;
           TimePrep = randomRecipe.readyInMinutes;
           extendedIngredients = randomRecipe.extendedIngredients;
           recipeInstructions = randomRecipe.instructions;
           recipeId = randomRecipe.id
          // Create an unordered list (ul) for ingredients
          const ulList = document.createElement("ul");

          // Iterate through extendedIngredients and add them to the ulList
          extendedIngredients.forEach((ingredient) => {
            const liItem = document.createElement("li");
            liItem.innerText = ingredient.original;
            ulList.appendChild(liItem);
            ingredientArray.push(ingredient.original)

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
              <button id="like-recipe" data-recipe-id="${recipeId}"><i class="fa-regular fa-heart"></i></button>
              <p id="instructions">${recipeInstructions}</p>
            </div>
            <button class="btn btn-outline-primary" id="view-recipe">View Recipe</button>
          `;

          document.getElementById("ingredient").value = "";
        });
    });


  });

  document.body.addEventListener("click", (event) => {
    if (event.target.id === "hide-recipe") {
      // Handle click on "hide-recipe" button
      recipe.style.display = "none";
    } else if (event.target.id === "view-recipe") {
      // Handle click on "view-recipe" button
      recipe.style.display = "block";
    } else if (event.target.id === "like-recipe") {
      console.log("Liked");
      const recipeData = {
        title: recipeTitle,
        instructions: recipeInstructions,
        timeprep: TimePrep,
        img: recipeImg,
        ingredients: ingredientArray.toString(),
        recipe_id: recipeId,
      };

      // Send a POST request to create a new recipe
      createNewRecipe(recipeData);
    }
  });
  function createNewRecipe(recipeData) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    fetch('/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ recipe: recipeData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error creating recipe');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Recipe created successfully:', data);
      })
      .catch((error) => {
        console.error('Error creating recipe:', error.message);
      });
  }

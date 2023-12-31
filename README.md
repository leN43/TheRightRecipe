
# TheRightRecipe

"TheRightRecipe" is a web application for finding recipes based on a user-provided ingredient.

- Users can enter an ingredient in the input field and click the "SEARCH" button.
- The application makes an API request to retrieve a list of recipes that include the specified ingredient.
- It filters these recipes based on preparation time (30 minutes or less).
 - It then randomly selects one recipe from the filtered list.
- The selected recipe's details, including its title, image, preparation time, ingredients, and instructions, are displayed to the user.
- Users can view the recipe details, hide them, or like the recipe, adding it to their favorites.


- The application utilizes the Spoonacular API to fetch recipe data based on ingredients and retrieve recipe details.

## How To Use

Install my-project with npm

```bash
  # Clone this repository
$ git clone https://github.com/leN43/TheRightRecipe.git

# Go into the repository
$ cd TheRighRecipe

# Install gems
$ bundle install

# Run the app
$rails s


```
   
## Screenshots
Type an ingredient name in the search bar
![screnshot](screeTrr/trrHomeType.png)
Press the SEARCH button and get a random Recipe you can cook in 30 min or less
Press VIEW RECIPE to see the instructions
![screnshot](screeTrr/trrRecipe.png)
Press VIEW RECIPE to see the instructions
![screnshot](screeTrr/trrRecipe.png)
You can add the recipe to your favorites 
![screnshot]( screeTrr/trrRecipeAdded.png)
Check out all your favorites Recipes after login in
![screnshot]( screeTrr/trrLogin.png)
![screnshot]( screeTrr/trrFavRecipe.png)
## 🛠 Skills
Ruby rails javascript postgresql git github heroku shtml5 cs3 bootstrap

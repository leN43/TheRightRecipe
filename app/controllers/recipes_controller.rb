class RecipesController < ApplicationController
  before_action :authenticate_user!, only: [:myRecipes]
  def new
    @recipe = Recipe.new
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def myRecipes
    if current_user
      @recipes = current_user.recipes
    else
      # Redirect to a meaningful location, such as the root path or the sign-in page
      redirect_to root_path, alert: 'You need to sign in to access your recipes.'
    end
  end

  def create
    # Create a new recipe associated with the current user
    @recipe = current_user.recipes.build(recipe_params)

    if @recipe.save
      redirect_to myRecipes_path, notice: 'Recipe was successfully created.'
    else
      render :new
    end
  end

  def destroy
      @recipe = Recipe.find(params[:id])
      @recipe.destroy
      redirect_to myRecipes_path, notice: 'Recipe was successfully deleted.'
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:title, :instructions, :timeprep, :img, :ingredients)
  end
end

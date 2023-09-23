class RecipesController < ApplicationController

  def new
    @recipe = Recipe.new
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def myRecipes
    @recipes = current_user.recipes
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

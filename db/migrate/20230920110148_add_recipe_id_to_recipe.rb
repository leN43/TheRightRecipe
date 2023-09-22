class AddRecipeIdToRecipe < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :recipe_id, :integer
  end
end

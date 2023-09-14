class AddIngredientsToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :ingredients, :string
  end
end

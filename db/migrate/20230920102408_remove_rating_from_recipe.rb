class RemoveRatingFromRecipe < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipes, :rating, :integer
  end
end

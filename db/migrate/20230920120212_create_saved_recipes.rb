class CreateSavedRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_recipes do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :recipe_id
      t.string :title
      t.text :instructions
      t.string :img
      t.integer :timeprep

      t.timestamps
    end
  end
end

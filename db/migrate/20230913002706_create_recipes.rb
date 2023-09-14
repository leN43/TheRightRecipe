class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :instructions
      t.integer :rating
      t.integer :timeprep
      t.string :img

      t.timestamps
    end
  end
end

class Recipe < ApplicationRecord
has_many :favorite_recipes
has_many :comments

def ingredient_list
  ingredients.split(',').map(&:strip) if ingredients.present?
end
end

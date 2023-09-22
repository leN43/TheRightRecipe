# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

# Recipe 1
Recipe.create(
  title: "Spaghetti Carbonara",
  instructions: "1. Cook spaghetti according to package instructions. 2. In a separate pan, fry pancetta until crispy. 3. Mix eggs, cheese, and pepper in a bowl. 4. Combine cooked spaghetti, pancetta, and egg mixture. Serve hot.",
  timeprep: 20,
  img: "spaghetti.jpg",
  ingredients: "Spaghetti, Pancetta, Eggs, Pecorino Romano Cheese, Black Pepper",
  recipe_id: 1
)

# Recipe 2
Recipe.create(
  title: "Chicken Alfredo",
  instructions: "1. Cook fettuccine pasta until al dente. 2. Sauté chicken breast until cooked through. 3. Make Alfredo sauce with butter, cream, and parmesan. 4. Combine cooked pasta, chicken, and Alfredo sauce. Serve with parsley.",
  timeprep: 30,
  img: "chicken_alfredo.jpg",
  ingredients: "Fettuccine Pasta, Chicken Breast, Butter, Heavy Cream, Parmesan Cheese, Parsley",
  recipe_id: 2
)

# Recipe 3
Recipe.create(
  title: "Vegetable Stir-Fry",
  instructions: "1. Heat oil in a wok or skillet. 2. Stir-fry mixed vegetables until tender. 3. Add soy sauce, garlic, and ginger. 4. Serve over cooked rice or noodles.",
  timeprep: 15,
  img: "vegetable_stir_fry.jpg",
  ingredients: "Mixed Vegetables (e.g., broccoli, bell peppers, carrots), Soy Sauce, Garlic, Ginger, Rice or Noodles",
  recipe_id: 3
)

puts "Three recipes created successfully."

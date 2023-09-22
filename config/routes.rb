Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
 end
  root 'pages#home'
  get 'about', to: 'pages#about'
  get 'profile', to: 'pages#profile'

  # Define a route for retrieving saved recipes using a GET request
  get 'myRecipes', to: 'recipes#myRecipes'
  post 'recipes', to: 'recipes#create'
  get 'recipes/:id', to: 'recipes#show', as: 'recipe'
  delete 'recipes/:id', to: 'recipes#destroy', as: 'destroy_recipe'
end

Rails.application.routes.draw do

  root 'pages#home'
  get '/about', to: 'pages#about'
  get '/inourwords', to: 'pages#inourwords'
  get '/donees/:id', to: 'donees#show', as: :donee

  # get "/:name", to: "donees#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

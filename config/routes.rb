Rails.application.routes.draw do
  # resources :donees
root :to => 'donees#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

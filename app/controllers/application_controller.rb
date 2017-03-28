class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_donees

  def set_donees
    # byebug
    @donees = Donee.all
  end
end

class PagesController < ApplicationController
  def home
  end

  def about
    @donees = Donee.all
  end

  def donee_ids
  end

  def inourwords
  end

end

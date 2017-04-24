class PagesController < ApplicationController
  def home
    @start_date = Date.today
    str = "Wed, 31 May 2017 01:20:19 -0400 (EDT)"
    @end_date = str.to_date
    @days_remaining = (@end_date - @start_date).to_i
    respond_to do |format|
      format.html
      format.json { head :no_content }
    end
  end

  def about
  end

  def inourwords
  end
end

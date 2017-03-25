class DoneesController < ApplicationController
  before_action :set_donee, only: [:show, :edit, :update, :destroy]

  # GET /donees
  # GET /donees.json
  def index

  end

  # GET /donees/1
  # GET /donees/1.json
  def show
    # Date.strptime('03-02-2001', '%d-%m-%Y')
    # byebug
    @donee = Donee.first


    # @donee_names = []
    #
    # donees = Donee.all
    # donees.each do |n|
    #   @donee_names << n.name
    # end
    # byebug

  end

  # GET /donees/new
  def new
    @donee = Donee.new
  end

  # GET /donees/1/edit
  def edit
  end

  # POST /donees
  # POST /donees.json
  def create
    @donee = Donee.new(donee_params)

    respond_to do |format|
      if @donee.save
        format.html { redirect_to @donee, notice: 'Donee was successfully created.' }
        format.json { render :show, status: :created, location: @donee }
      else
        format.html { render :new }
        format.json { render json: @donee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /donees/1
  # PATCH/PUT /donees/1.json
  def update
    respond_to do |format|
      if @donee.update(donee_params)
        format.html { redirect_to @donee, notice: 'Donee was successfully updated.' }
        format.json { render :show, status: :ok, location: @donee }
      else
        format.html { render :edit }
        format.json { render json: @donee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /donees/1
  # DELETE /donees/1.json
  def destroy
    @donee.destroy
    respond_to do |format|
      format.html { redirect_to donees_url, notice: 'Donee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def donee_params
      params.require(:donee).permit(:name, :blurb, :id)
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_donee
      # byebug
      @donee = Donee.find(params[:id])
    end
end

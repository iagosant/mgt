require 'test_helper'

class DoneesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @donee = donees(:one)
  end

  test "should get index" do
    get donees_url
    assert_response :success
  end

  test "should get new" do
    get new_donee_url
    assert_response :success
  end

  test "should create donee" do
    assert_difference('Donee.count') do
      post donees_url, params: { donee: { blurb: @donee.blurb, name: @donee.name } }
    end

    assert_redirected_to donee_url(Donee.last)
  end

  test "should show donee" do
    get donee_url(@donee)
    assert_response :success
  end

  test "should get edit" do
    get edit_donee_url(@donee)
    assert_response :success
  end

  test "should update donee" do
    patch donee_url(@donee), params: { donee: { blurb: @donee.blurb, name: @donee.name } }
    assert_redirected_to donee_url(@donee)
  end

  test "should destroy donee" do
    assert_difference('Donee.count', -1) do
      delete donee_url(@donee)
    end

    assert_redirected_to donees_url
  end
end

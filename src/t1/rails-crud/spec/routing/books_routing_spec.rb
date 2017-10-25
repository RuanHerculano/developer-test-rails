require 'spec_helper'

describe "routing to books" do
  it "routes /books to books#index" do
    expect(get: "/books").to route_to(
      controller: "books",
      action: "index"
    )
  end

  it "routes /books/1 to books#show" do
    expect(get: "/books/1").to route_to(
      controller: "books",
      action: "show",
      id: "1"
    )
  end

  it "routes /books/new to books#new" do
    expect(get: "/books/new").to route_to(
      controller: "books",
      action: "new"
    )
  end

  it "routes /books to books#create" do
    expect(post: "/books").to route_to(
      controller: "books",
      action: "create"
    )
  end

  it "routes /books/1/edit to books#edit" do
    expect(get: "/books/1/edit").to route_to(
      controller: "books",
      action: "edit",
      id: "1"
    )
  end

  it "routes /books/1 to books#update" do
    expect(put: "/books/1").to route_to(
      controller: "books",
      action: "update",
      id: "1"
    )
  end

  it "routes /books/1 to books#destroy" do
    expect(delete: "/books/1").to route_to(
      controller: "books",
      action: "destroy",
      id: "1"
    )
  end
end
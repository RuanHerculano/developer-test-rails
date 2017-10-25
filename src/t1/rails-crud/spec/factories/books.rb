FactoryGirl.define do
  factory :book do
    title author: Faker::Book.title
    description 'description'
    body 'body'
    author Faker::Book.author
  end
end

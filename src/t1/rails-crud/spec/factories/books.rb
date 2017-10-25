FactoryGirl.define do
  factory :book do
    title Faker::Book.title
    description 'description'
    body 'body'
    author Faker::Book.author
  end
end

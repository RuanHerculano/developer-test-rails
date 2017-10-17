class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.strig :title
      t.string :description
      t.text :body
      t.string :author

      t.timestamps
    end
  end
end

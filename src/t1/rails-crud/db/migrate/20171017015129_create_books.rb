class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title,       null: false
      t.string :description, null: false
      t.text   :body,        null: false
      t.string :author,      null: false

      t.timestamps
    end
  end
end

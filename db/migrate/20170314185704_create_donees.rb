class CreateDonees < ActiveRecord::Migration[5.0]
  def change
    create_table :donees do |t|
      t.string :name
      t.text :blurb

      t.timestamps
    end
  end
end

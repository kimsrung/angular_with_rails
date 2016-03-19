class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :name
      t.string :average_rating
      t.integer :release_year
      t.string :url
      t.string :rating

      t.timestamps
    end
  end
end

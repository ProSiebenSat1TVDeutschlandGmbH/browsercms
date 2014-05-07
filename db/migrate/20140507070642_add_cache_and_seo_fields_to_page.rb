class AddCacheAndSeoFieldsToPage < ActiveRecord::Migration
  def change
    add_content_column :pages, :og_title, :string
    add_content_column :pages, :og_description, :text
    add_content_column :pages, :og_image, :string

    add_content_column :pages, :custom_html, :text
    add_content_column :pages, :search_cache, :text
  end
end

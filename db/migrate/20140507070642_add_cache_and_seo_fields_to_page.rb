class AddCacheAndSeoFieldsToPage < ActiveRecord::Migration
  def change
    add_content_column :cms_pages, :og_title, :string
    add_content_column :cms_pages, :og_description, :text
    add_content_column :cms_pages, :og_image, :string

    add_content_column :cms_pages, :custom_html, :text
    add_content_column :cms_pages, :search_cache, :text
  end
end

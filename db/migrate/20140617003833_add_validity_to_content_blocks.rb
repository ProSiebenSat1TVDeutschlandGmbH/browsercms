class AddValidityToContentBlocks < ActiveRecord::Migration
  def change
    subclasses = ObjectSpace.each_object(::Class).select do |klass|
      klass < Cms::Concerns::HasContentType::InstanceMethods
    end
    subclasses.uniq! { |k| k.table_name }

    # Add validity to content_blocks
    subclasses.each do |m|
      if m.included_modules.include?(Cms::Acts::ContentBlock::MacroMethods::InstanceMethods)
        add_content_column m.table_name.to_sym, :valid_from, :datetime
        add_content_column m.table_name.to_sym, :valid_to, :datetime
      end
    end
  end
end

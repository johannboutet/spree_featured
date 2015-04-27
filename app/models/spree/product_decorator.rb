Spree::Product.class_eval do
	add_search_scope :only_featured do
		where(featured: true)
	end
end
Deface::Override.new(:virtual_path => 'spree/admin/shared/_head',
					 :name => 'add_api_key',
					 :insert_after => 'meta[name="viewport"]',
					 :text => '<meta name="api-key" content="<%= spree_current_user.spree_api_key %>" />')
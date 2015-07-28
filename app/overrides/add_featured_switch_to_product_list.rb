Deface::Override.new(:virtual_path => 'spree/admin/products/index',
					 :name => 'add_header_column',
					 :insert_before => "[data-hook='admin_products_index_header_actions']",
					 :text => "<th><%= Spree.t(:featured_col_title) %></th>")

Deface::Override.new(:virtual_path => 'spree/admin/products/index',
					 :name => 'add_switch_column',
					 :insert_before => "[data-hook='admin_products_index_row_actions']",
					 :partial => 'spree/admin/products/featured_switch')
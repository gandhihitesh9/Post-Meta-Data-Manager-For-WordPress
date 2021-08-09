jQuery(document).ready(function() {
    jQuery('#pmdm-wp-table').DataTable( {
    	 columns: [
		    null,
		    { orderable: false },
		    { orderable: false }
		  ]
    });

    /* Delete Meta Action */
    jQuery('#pmdm-wp-table').on('click', 'td button.delete-meta', function (e){
	    e.preventDefault();

	    var table = jQuery('#pmdm-wp-table').DataTable();	               

	    var meta_id = jQuery(this).attr("data-id");
	    var btn_id = jQuery(this).attr("id");
	    var post_id = jQuery("#post_ID").val();

	    

	     if (confirm("Are you sure want to delete this Meta?")) {
	        
	     	jQuery.ajax({
	            url: pmdm_wp_ajax.ajax_url,
	            type: 'post',
	            dataType: 'json',
	            data: {
	                action: 'pmdm_wp_delete_meta',
	                post_id : post_id,
	                meta_id: meta_id,
	            },
	            success: function (response) {
	            	if(response.success) {
	            		table.row( jQuery("#"+btn_id).parents("tr") ).remove().draw();

	            	} else {
	            		alert(response.data.msg);
	            	}
	               
	            }
	        });
	        
	    }
	    return false;

	});
} );
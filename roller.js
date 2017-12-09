$(function() {
   $('#demo').scrollbox();

/*	var response = [{
		"name": "test asdasdkasjdnkajsnd",
		"description": "test desc asdasdkasjdnkajsnd",
		"time": "2013-12-03",
		"image_url":"https://cdn.shopclues.com/images/thumbnails/79584/200/200/124480375JuicerSlicerComboFreeMultiCutterwithPeeler0011501851537.jpg",
		"product_url":"http://www.shopclues.com/srk-standard-kitchen-combo-fruit-juicer-with-6-in-1-slicer-and-multi-veg-cutter-126888745.html",
	},{
		"name": "test asdasdkasjdnkajsnd",
		"description": "test desc asdasdkasjdnkajsnd",
		"time": "2013-12-03",
		"image_url":"https://cdn.shopclues.com/images/thumbnails/79584/200/200/124480375JuicerSlicerComboFreeMultiCutterwithPeeler0011501851537.jpg",
		"product_url":"http://www.shopclues.com/srk-standard-kitchen-combo-fruit-juicer-with-6-in-1-slicer-and-multi-veg-cutter-126888745.html",
	},{
		"name": "test asdasdkasjdnkajsnd",
		"description": "test desc asdasdkasjdnkajsnd",
		"time": "2013-12-03",
		"image_url":"https://cdn.shopclues.com/images/thumbnails/79584/200/200/124480375JuicerSlicerComboFreeMultiCutterwithPeeler0011501851537.jpg",
		"product_url":"http://www.shopclues.com/srk-standard-kitchen-combo-fruit-juicer-with-6-in-1-slicer-and-multi-veg-cutter-126888745.html",
	}
]*/
	
	$.ajax({
		type : "GET",
		url : "http://127.0.0.1:5000/roller/fake",
		crossDomain:'true',
//		data : JSON.stringify(that.params),
		contentType : 'application/json',
		success : function(response) {
			console.log(response);
				var html = '';
				$.each(response, function(key, value){
			    html += '<li><a href="'+ value.product_url +'">';
			    html += '<div>';
			    html += '<img src="'+value.image_url+'" class="iconDetails"/></div>';
			    html += '<div style="margin-left:60px;">';
			    html += '<p>'+ value.name +'</p><br/>';
			    html += '<p>'+ value.description +'</p><br/>';
			    html += '<p>'+ moment(value.time).fromNow() +'</p>';
				html += '</div>';
			    html += '</div>';
			    html += '</a></li>';
			});
			console.log(html);
			
			$('#scroll_ui').html(html);
	},
		error : function(response) {
			console.log("error");		
		}
	});

console.log( "ready! 21" );
});

$(function() {
   $('#demo').scrollbox();

	/*var response = [{
		"name": "test asdasdkasjdnkajsnd",
		"description": "test desc asdasdkasjdnkajsnd",
		"time": "Sat, 09 Dec 2017 11:44:00 GMT",
		"image_url":"https://cdn.shopclues.com/images/thumbnails/79584/200/200/124480375JuicerSlicerComboFreeMultiCutterwithPeeler0011501851537.jpg",
		"product_url":"http://www.shopclues.com/srk-standard-kitchen-combo-fruit-juicer-with-6-in-1-slicer-and-multi-veg-cutter-126888745.html",
	},{
		"name": "test asdasdkasjdnkajsnd",
		"description": "test desc asdasdkasjdnkajsnd",
		"time": "Sat, 09 Dec 2017 11:44:00 GMT",
		"image_url":"https://cdn.shopclues.com/images/thumbnails/79584/200/200/124480375JuicerSlicerComboFreeMultiCutterwithPeeler0011501851537.jpg",
		"product_url":"http://www.shopclues.com/srk-standard-kitchen-combo-fruit-juicer-with-6-in-1-slicer-and-multi-veg-cutter-126888745.html",
	},{
		"name": "test asdasdkasjdnkajsnd",
		"description": "test desc asdasdkasjdnkajsnd",
		"time": "Sat, 09 Dec 2017 11:44:00 GMT",
		"image_url":"https://cdn.shopclues.com/images/thumbnails/79584/200/200/124480375JuicerSlicerComboFreeMultiCutterwithPeeler0011501851537.jpg",
		"product_url":"http://www.shopclues.com/srk-standard-kitchen-combo-fruit-juicer-with-6-in-1-slicer-and-multi-veg-cutter-126888745.html",
	}
]*/
	function truncateText(string, targetCharacterLength) {
		var length = string.length;
		if (length < targetCharacterLength) {
		  return (string)
		} else {
		  var shortenedString = string.slice(0, targetCharacterLength);
		  var tempshortenedString = shortenedString.slice(0, shortenedString.lastIndexOf(' '));

		  var lastMarkupBegin = 0;
		  var lastMarkupEnds = 0;
		  try { 
		    lastMarkupBegin = tempshortenedString.lastIndexOf("<a");
		    lastMarkupEnds = tempshortenedString.lastIndexOf("/a>");
		  } catch (err) {}
		  //alert(lastMarkupEnds);
		  if (lastMarkupBegin != -1) { // has an opening anchor tag
		    if (lastMarkupEnds == -1) { // not having an closing tag
		      tempshortenedString = tempshortenedString.slice(0, lastMarkupBegin);
		      //alert(tempshortenedString);
		      return tempshortenedString + '... ';
		    }
		  }
		  return shortenedString + '... '
		}
	}

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
			    html += '<h6>'+ truncateText(value.name,20) +'</h6><br/>';
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

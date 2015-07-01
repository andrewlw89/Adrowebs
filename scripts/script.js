$.ajax({ 
   type: "GET",
   dataType: "jsonp",
   url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=69856db44f32145ff44c1243b55bd615&user_id=132728132%40N04&format=json"
});
function jsonFlickrApi(response) {
	var responseArray = response.photos.photo;
	responseArray.forEach(function(data) {
		var farm = data.farm;
		var id = data.id;
		var server = data.server;
		var secret = data.secret;
		var imageUrl = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
		var imageTag = '<li><img src="' + imageUrl + '"></li>';
		$(".loading").remove();
		$(".shots").append(imageTag);
	});
}

//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
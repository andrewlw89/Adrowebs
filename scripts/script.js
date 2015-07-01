$.ajax({ 
   type: "GET",
   dataType: "jsonp",
   url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=69856db44f32145ff44c1243b55bd615&user_id=132728132%40N04&format=json"
});

function jsonFlickrApi(response) {
	console.log(response);


}

//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
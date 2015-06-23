

// var instagramData;

console.log(instagramData);

function getInstagramData(){

	var tagName="news";
	var myInstaKey = 'ceccd2ffee7a453f8c6866cc48f0bc89';
	var instagramURL = 'https://api.instagram.com/v1/tags/' + tagName + '/media/recent?client_id=';
	var	searchInstagramURL = instagramURL + myInstaKey;
	$.ajax({
		url: searchInstagramURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("Oh no");
		},
		success: function(data){
			console.log("WooHoo Instagram");
			console.log(data);

			instagramData = data;
			console.log(instagramData);


			console.log(instagramData.data[1].images.low_resolution.url);
			console.log(instagramData.data.length);

			//Genereate HTML
			// createHTML();
			initCube();
			// animate();
		}
	});
}

$(document).ready(function(){
	console.log("We are ready!");
	getInstagramData();
});
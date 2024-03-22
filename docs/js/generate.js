$(document).ready(function() {
	
	let params   = new URLSearchParams(location.search.substring(1));
	let phrase = params.get('phrase');
	
	//var words = []
	
	//for (const word in phrase.split(" ")) {
	//	console.log(word);
	//	var word_bio = word.split("").join("░");
	//	console.log(word_bio);

	//	words.push(word_bio);
	//}

	console.log(phrase.split("").join("░"));
	$('#in-bio-text').html("░" + phrase.replace(/\s+/g, "").toUpperCase().split("").join("░") + "░");

});

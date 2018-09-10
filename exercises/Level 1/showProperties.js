function showProperties(obj) {
	for(let prop in obj)
		if (typeof obj[prop] === 'string')
			console.log(prop, obj[prop]);
	return 0;
};

const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b'
};

showProperties(movie);
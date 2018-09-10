function showNumbers(limit) {
	for(let i = 0; i <= limit; i++)
		console.log(i, i % 2 ? 'ODD' : 'EVEN');
	return;
}

showNumbers(10);
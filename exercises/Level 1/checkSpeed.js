function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	if (speed < speedLimit + kmPerPoint) return 'Ok';
	let points = Math.floor((speed - speedLimit) / kmPerPoint);
	return points >= 12 ? 'License suspended' : 'Points: ' + points;
}

console.log(checkSpeed(50));
console.log(checkSpeed(79));
console.log(checkSpeed(180));
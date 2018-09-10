function calculateGrade(marks) {
	let sum = 0;

	for(let prop of marks)
		sum+=prop;
	let average = sum / marks.length;

	if (average <= 59) return 'F';
	if (average <= 69) return 'D';
	if (average <= 79) return 'C';
	if (average <= 89) return 'B';
	return 'A';
};
let marks = [80, 80, 50];
console.log(calculateGrade(marks));

const stuff = [
	{
		name: 'Carly',
		yearOfBirth: 2018,
	},
	{
		name: 'Ray',
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: 'Jane',
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

const findTheOldest = function (people) {
	let ages = people.map((person) => {
		if (!person.yearOfDeath) {
			return [person.name, new Date().getFullYear() - person.yearOfBirth];
		} else {
			return [person.name, person.yearOfDeath - person.yearOfBirth];
		}
	});

	console.table(ages);
};
findTheOldest(stuff);
// Do not edit below this line
module.exports = findTheOldest;

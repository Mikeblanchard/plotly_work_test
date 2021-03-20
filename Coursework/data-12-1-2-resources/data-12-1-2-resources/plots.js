var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 1.12;
});
console.log(doubled);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.population;
});
console.log(cityNames);


var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWiths = words.filter((swords) => swords.startsWith("s"));

console.log(startsWiths);



var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var slicer = words.slice(0,3);

console.log(slicer);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice = words.slice(3, );

console.log(slice);



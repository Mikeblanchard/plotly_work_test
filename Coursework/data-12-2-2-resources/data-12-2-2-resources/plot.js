console.log(cityGrowths);
let topFiveCities = cityGrowths.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016);
topFiveCities = topFiveCities.slice(0,5);
console.log(topFiveCities);
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
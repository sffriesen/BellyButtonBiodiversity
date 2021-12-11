// test if data is read in correctly
// console.log(cityGrowths);

// Assign data to a variable
const data = cityGrowths;

// Sort the cities in descending order of population growth
var sortedCities = data.sort((b, a) => a.Increase_from_2016 - b.Increase_from_2016);
// console.log(sortedCities)

// Select only the top five cities in terms of growth
var topFiveCities = sortedCities.slice(0, 5);
// console.log(topFiveCities);

// Create separate arrays for the city names and their population growths
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
// console.log(topFiveCityNames)

// Use Plotly to create a bar chart with these arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var datas = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", datas, layout);
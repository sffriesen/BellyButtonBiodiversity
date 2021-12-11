// Line Chart
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


// Bar Chart
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var layout = {
//     title: "Nonalcoholic Bar Survey",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

// Pie Chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   var data = [trace];
//   var layout = {
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);

// Scatter plot
//   var trace = {
//     x: [1, 2, 3, 4, 5, 6], 
//     y: [10, 20, 30, 20, 15, 12],
//     mode: 'markers',
//     type: 'scatter'
//   };
//   var data = [trace];
//   var layout = {
//     title: "Scatter Plot",
//   };
//   Plotly.newPlot("plotArea", data, layout);


// map functions

// var numbers = [0, 2, 4, 6, 8];
// let fives = numbers.map(numbers => numbers+5);
// console.log(fives)


// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var populations = cities.map(function(pop){
//     return pop.population;
// });
// console.log(populations);


// filter methods
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var sNames = words.filter(words => words.startsWith("s"));

// console.log(sNames);

// slice method
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

console.log(words.slice(0,3));
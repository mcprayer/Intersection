console.log("Welcome to Intersection 1.0");
var array1 = ['car1', 'truck1', 'car2' ];


//Display the contents of the array1
// displayData(array1);

//console.log(map1);
function displayData(dataSet, message = '')
{
  // Typescrit this later
  console.log("-- "+message+ " --");
  dataSet.map(x => console.log(x));
}

function getLaneAssignments(dataSet)
{
  // Typescrit this later
  dataSet.map(x => console.log(x));
}


var northbound = [];
var southbound = [];
var eastbound = [];
var westbound = [];

// create and fill Array
var testlist = Array(10).fill().map((x,i)=>i);
//displayData(testlist, "auto filled Array");
var testlist2 = Array(10).fill(); //.map((x,i)=>i);

// displayData(lane4);

//timer
// --------------------------

var rand = function(min, max) {
return Math.random() * (max - min) + min;
};

var getRandomItem = function(list, weight) {
var total_weight = weight.reduce(function (prev, cur, i, arr) {
return prev + cur;
});

var random_num = rand(0, total_weight);
var weight_sum = 0;
//console.log(random_num)

for (var i = 0; i < list.length; i++) {
weight_sum += weight[i];
weight_sum = +weight_sum.toFixed(2);

if (random_num <= weight_sum) {
return list[i];
}
}

// end of function
};

//list for weighted randomness
var list = ['javascript', 'php', 'ruby', 'python'];
var roads = ['northbound', 'southbound', 'eastbound', 'westbound'];
var oneBusy = [0.49, 0.14, 0.13, 0.14];
var weight = [0.5, 0.2, 0.2, 0.1];
var random_item = getRandomItem(list, weight);

// perform a function on all elements
testlist.forEach(function(element) {
  //console.log(element);
  testlist2[element] = getRandomItem(roads, oneBusy);
  });

  displayData(testlist2,"test lanes function");

//When do we add them? 1 to 3 seconds
//get a list of lanes anytime
//randomly add them to the lane
//


//window.open('http://google.com/');
console.log("Random item:"+random_item);

//setTimeout("console.log('Hi dad')", 100);


//displayData(cryptoArray)

// function getChar() {
//   var div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.background = "red";
//   div.style.color = "white";

//   document.getElementById("main").appendChild(div);
// }

var data = [4, 5, 18, 19, 29];
var options = { width: 250, height: 250};
var widthPerData = (options.width / data.length) * 0.8;
var height = 750;

function createDiv(theWidth, theHeight, color) {

  $('<div class=\'bg-primary\' style=\'width:' + theWidth + 'px;height:' + theHeight + '%;\'/>').appendTo('#chart');
  // $('<div class=\'btn bg-primary\' style=\'width:' + theWidth + 'px;height:' + theHeight + 'px;background-color:' + color
  // ';\'/>').appendTo('#main');

}

function createBars() {
  var values = [4, 5, 18, 19, 29];
  var maxValue = Math.max.apply(null, values);
  var maxHeight = maxValue;


  for (var i = 0; i < values.length; i++) {
    var heightPerData = (values[i] / maxHeight) * 100;
    createDiv(widthPerData, heightPerData, 'red');
  }
}

function sizeChart(width, height){
  $('#chart').height(height);
  $('#chart').width(width);
}

createBars();
sizeChart(350, 350);



// drawBarChart(data, options, element);
// $('#main').append(
//   $('<div/>')
//     .attr("id", "newDiv1")
//     .addClass("newDiv purple bloated")
//     .css('background-color', 'red')
//     .append("<span/>")
//     .text("hello world")
// );

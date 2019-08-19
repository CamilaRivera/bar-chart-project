//Bar options
var data = {
  values: [[4, 5], [18, 19, 29], [2]],
  labels: ["red", "azul", "verde"]
};
var options = {
  width: 250,
  height: 250,
  dataColors: [["red", "blue"], ["green", "red", "blue"], ["purple"]],
  spacing: 25,
  // start , bottom, center
  barLabelPosition: 'center',
  titleOptions: {
    text: 'Hello Chart!',
    color: 'red',
    size: 36
  }
};
var chartContainer = $('#chart');


function sumArray(data) {
  sumTotal = 0;
  for (var i = 0; i < data.length; i++) {
    sumTotal = sumTotal + data[i];
  }

  return sumTotal;
}

function getMaxBar(data) {
  var barSums = data.map(sumArray);
  return Math.max.apply(null, barSums);
}


function createBar(barContainerElement, barOptions) {
  var bar = $('<div></div>')
    .addClass("text-center")
    .css('width', barOptions.width + 'px' )
    .css('height', barOptions.height + '%')
    .css('margin-left', barOptions.spacing + 'px');
  bar.appendTo(barContainerElement);

  for (var i = 0; i < barOptions.values.length; i++) {
    var height = (barOptions.values[i] / sumArray(barOptions.values)) * 100;
    $('<div></div>')
      .addClass('bar-chart-bar')
      .addClass('text-white')
      .addClass('justify-content-' + barOptions.labelPosition)
      .addClass('d-flex')
      .addClass('flex-column')
      .css('height', height + '%')
      .css('background-color', barOptions.dataColorBar[i])
      .text(barOptions.text[i])
      .appendTo(bar);
  }
}

function createLabel(barOptions) {
  // var span = $('<div class= justify-content + barOptions.labelPosition + ' text-center\' style=\'width:' + barOptions.width + 'px;\'/>');
  $('<div></div>')
    .addClass('justify-content-' + barOptions.labelPosition)
    .addClass('text-center')
    .css('width', barOptions.width + 'px')
    .css('margin-left', barOptions.spacing + 'px')
    .text(barOptions.labelName)
    .appendTo('#label');
}

function sizeChart(width, height) {
  $('#chart').height(height);
  $('#chart').width(width);
  $('#label').width(width);
}

function setTitle(title, color, size) {
  var chartTitle = document.getElementById("chartTitle");
  chartTitle.innerHTML = title;
  chartTitle.style.fontSize = size + "px";
  chartTitle.style.color = color;
}

function createBars(data, options, element) {

  sizeChart(options.width, options.height);
  setTitle(options.titleOptions.text, options.titleOptions.color, options.titleOptions.size);

  var widthAvailableForBars = options.width - options.spacing * (data.values.length + 1);
  var barWidth = widthAvailableForBars / data.values.length;

  var labels = data.labels;
  var maxValue = getMaxBar(data.values);
  var maxHeight = maxValue;


  for (var i = 0; i < data.values.length; i++) {
    var barOptions = {
      width: barWidth,
      height: (sumArray(data.values[i]) / maxHeight) * 100,
      text: data.values[i],
      labelPosition: options.barLabelPosition,
      labelName: labels[i],
      values: data.values[i],
      dataColorBar: options.dataColors[i],
      spacing: options.spacing
    };
    createBar(element, barOptions);
    createLabel(barOptions);
  }
}




createBars(data, options, chartContainer );


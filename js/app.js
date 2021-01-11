var svgWidth = 800;
var svgHeight = 500;
var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
  };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
var svg = d3
.select("#scatter")
.append("svg")
.attr("width", svgWidth)
.attr("height", svgHeight);
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
d3.csv("/assets/data/data.csv").then(function(myData) {
    myData.forEach(function(xdata) {
        xdata.poverty = +xdata.poverty;
        xdata.healthcare = +xdata.healthcare;
    })});
var xLinearScale = d3.scaleLinear()
    .domain([d3.min(myData, d=>d.poverty)*0.9,
     d3.max(myData, d => d.poverty)*1.1])
    .range([0, width]);


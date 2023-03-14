function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
   
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// Deliverable 1: 1. Create the buildChart function.
function buildCharts(sample) {
  // Deliverable 1: 2. Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Deliverable 1: 3. Create a variable that holds the samples array.
    var samples_array = data.samples;

    // Deliverable 1: 4. Create a variable that filters the samples for the object with the desired sample number.
    var filter  = samples_array.filter(sampleObj => sampleObj.id == sample);

    // Deliverable 3: 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaArray = data.metadata;
    var result_meta = metaArray.filter(sampleObj => sampleObj.id == sample);

    // Deliverable 1: 5. Create a variable that holds the first sample in the array.
    var first_sample = filter[0];
    console.log(first_sample)

    // Deliverable 3: 2. Create a variable that holds the first sample in the metadata array.
    var first_meta = result_meta[0];
    console.log(first_meta)
    // Deliverable 1: 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = first_sample.otu_ids;
    var otu_labels = first_sample.otu_labels;
    var sample_values = first_sample.sample_values;

    // Deliverable 3: 3. Create a variable that holds the washing frequency.
    var wash_freq = parseFloat(first_meta.wfreq)

    // Deliverable 1: 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order 
    // so the otu_ids with the most bacteria are last. 
    var yticks = otu_ids.slice(0, 10).map(id => 'OTU ' + id + '').reverse();

    // Deliverable 1: 8. Create the trace for the bar chart. 
    var bar_trace = [{
        x: sample_values.slice(0, 10).reverse(),
        y: yticks,
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation:"h",
        marker: {
        size: sample_values,
        color: otu_ids,
        colorscale:'Y10rBr'
        }
      }];
    // Deliverable 1: 9. Create the layout for the bar chart. 
    var bar_layout = {
      title: 'TOP 10 Bacteria Cultures Found',
      };

    // Deliverable 1: 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', bar_trace, bar_layout); 

    // Deliverable 2: 1. Create the trace for the bubble chart.
    var bubble_trace = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      type: 'scatter',
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Electric'
      }
    }]

    // Deliverable 2: 2. Create the layout for the bubble chart.

    var bubble_layout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: {title: 'OTU ID'},
      margins: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      },
      hovermode: 'closest'
    };
    // Deliverable 2: 3. Use Plotly to plot the data with the layout.

    Plotly.newPlot("bubble", bubble_trace, bubble_layout);
    
    // Deliverable 3: 4. Create the trace for the gauge chart.

    var gauge_trace = [{
      domain: {x: [0,1], y:[0,1]},
      value: wash_freq,
      title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 24}},
      type: 'indicator',
      mode: 'gauge+number',
      gauge: {
        axis: {
          range: [0,10],
          tickwidth: 1,
          tickcolor: 'black'},
          bar: {color: 'black'},
          steps: [
            {range: [0,2], color: 'red'},
            {range: [2,4], color: 'orange'},
            {range: [4,6], color: 'yelow'},
            {range: [6,8], color: 'lightgreen'},
            {range: [8,10], color: 'green'},
          ]}
        }];      
    
    
    // Deliverable 3: 5. Create the layout for the gauge chart.
    var gauge_layout = { 
      width: 500, 
      height: 400,
      margin: {t: 0, r: 0, l: 0, b: 0}
    };
    // Deliverable 3: 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gauge_trace, gauge_layout);

  });
}



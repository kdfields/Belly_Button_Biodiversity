# Belly Button Biodiversity

## Project Overview
The purpose of this project was to create an HTML dashboard using JavaScript code to extract data from a JSON file using the D3.js JavaScript library so that project volunteers can identify the top 10 bacterial species in their belly buttons.  Volunteers need to know this information in the event Improbable Beef identfies a species as a candidate to manufacture synthetic beef. When an individual volunteers' ID is chosen from a dropdown menu, the dashboard will display a horizontal bar chart that displays the top 10 bacterial species (OTUs), a bubble chart to show bacteria cultures by sample, and a gauge chart that displays the weekly washing frequecy's value.  The goal is for project volunteers to be able to identify whether that particular bacterial species is present in their navels.

### Resources
+ Visual Studio Code 1.76.2
+ chart.js, index.html, samples.json

## Analysis Results
### Deliverable 1: Create a Horizontal Bar Chart
+ Used buildCharts function to create the horizontal bar chart.
+ Retrieved data in .json file usng d3.json().then() method.
+ Created a variable that has the array for all the samples.
+ Filtered the variable that holds the samples array for the sample ID that matches the sample ID chosen in the dropdown menu and passed to the buildCharts function as the argument.
![image](https://user-images.githubusercontent.com/113741694/226197961-e4646bef-bd28-4083-bf95-f101b9669fcd.png)

+ Created a variable that hold the first sample in the array.
![image](https://user-images.githubusercontent.com/113741694/226197985-cf0c8261-426b-4942-8151-0bec9554ac55.png)

+ Created variables that have arrays for otu_ids, otu_labels, and sample_values.
![image](https://user-images.githubusercontent.com/113741694/226198054-55c167c6-5023-4fd8-a215-5a03e1615455.png)

+ Created the trace object; the x-values are the sample_values array and hover text uses the otu_labels in descending order.
+ Used the Plotly.newPlot() function to plot the trace object with the layout.
![image](https://user-images.githubusercontent.com/113741694/226198084-3669a8fd-7453-41c0-91d6-7bb625e93b66.png)

### Deliverable 2: Create a Bubble Chart
+ Created trace object for the bubble chart by assigning otu_ids as x-values, sample_values as y-values, and otu_labels as text properties.
+ Created the layout for the bubble chart and adding a title, a label for the x-axis, margins and hovermode property.
![image](https://user-images.githubusercontent.com/113741694/226199037-aae40008-be85-4294-97cf-46a00c7a257a.png)

+ Used the Plotly.newPlot() function to plot the trace object with the layout.
![image](https://user-images.githubusercontent.com/113741694/226199230-32628de2-48bc-4fd5-9474-f3ae696bfddf.png)

### Deliverable 3: Create a Gauge Chart
+ Created a variable that filters the metadata array for an object in the array whose ID property matches the ID number from the dropdown menu that is passed in the buildCharts() function as the argument.
![image](https://user-images.githubusercontent.com/113741694/226199502-4160e3f2-927b-4582-b0d8-18642f9246dc.png)

+ Created a variable that holds the first sample in the variable that filters the metadata array.
![image](https://user-images.githubusercontent.com/113741694/226199593-7b21f272-00c5-4cde-83ad-51dcd38e892b.png)

+ Created a variable that converts the washing frequency to a floating point number.
![image](https://user-images.githubusercontent.com/113741694/226199653-0ad567b0-b882-4912-afa8-39d73900cb81.png)

+ Created the trace object for the gauge chart.
+ Created the layout for the gauge chart and making sure that it fits in the <div></div> tag for the gauge ID.
+ Used the Plotly.newPlot() function to plot the trace object with the layout.
![image](https://user-images.githubusercontent.com/113741694/226199851-368f6320-32f0-430c-a2ba-b5fb63a235c1.png)

## Analysis Summary
The team was tasked with completing an HTML dashboard using our knowledge of JavaScript, Plotly, and D3.js to create a horizontal bar chart that displays the top 10 bactrial species (OTUs), a bubble chart to show bacteria cultures by sample, and gauge chart that displays the weekly washing frequecy's value when an individual's ID is selected in the dropdown menu.

![image](https://user-images.githubusercontent.com/113741694/226200716-b5c713b4-4fab-42da-9329-36a6b63d2061.png)

![image](https://user-images.githubusercontent.com/113741694/226200737-9587fd5b-e69a-4582-a6b5-d3bfec61c4bd.png)

![image](https://user-images.githubusercontent.com/113741694/226200782-d7fe86b1-052d-46c1-b11f-d6eaf8406dca.png)

The dashboard is a success and Improbable Beef's volunteers now have immediate feedback on whether the presence of specific bacterial species will be found in their belly buttons.








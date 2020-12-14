// Read the file samples.json

var  samplesData = "../samples.json"
d3.json(samplesData).then((data) => {
//    var samples = data.samples;
   console.log(data)
});

// Bar chart

// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
function buildPlot (){
    idInput = '945'
    d3.json(samplesData).then((data) => {

    // Store the id in an array
    var names = data.names;
    console.log(names);

    // Find the index for the input ID
    idIndex = names.indexOf(idInput);
    console.log(idIndex);

    // Find the sample information for the ID
    var samples = data.samples[idIndex];
    console.log(samples);

    // Use sample_values as the values for the bar chart

    var sampleValues = (samples.sample_values).slice(0,10);
    console.log(sampleValues);

    // Use otu_ids as the labels for the bar chart.

    var otuIds = (samples.otu_ids).slice(0,10);
    console.log(otuIds);
    var otuIdLabels = otuIds.map(otu => `OTU ${otu}`);
    console.log(otuIdLabels);
    //samples.map(sample => sample.sample_values)

    // Use otu_labels as the hovertext for the chart.

    var otuLabels = (samples.otu_labels).slice(0,10);
    console.log(otuLabels);

    // Build Bar Plot

    var trace1 = {
        x: sampleValues,
        y: otuIdLabels,
        type: "bar",
        orientation: 'h',
        text: otuLabels
    };

    var data = [trace1];

    var layout = {
        title: "ID Information"
    };

    Plotly.newPlot("bar", data, layout)
    // if (idInput == samples.id) {
    //     console.log(samples.id)
    // }

    // var sampleValuesMap = samples.map(sample => sample.sample_values)

    // console.log(sampleValuesMap)

    })    
}
buildPlot()
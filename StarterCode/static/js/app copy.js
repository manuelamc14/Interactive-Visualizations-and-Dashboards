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
    d3.json(samplesData).then((data) => {

    // Grab values from the data json object to build the plots
    sampleValueArray = []                           

    var samples = data.samples

    console.log(samples)

    samples.forEach((sample) => {
        Object.entries(sample).forEach(([key, value]) => {
            if (key == "sample_values"){
                sampleValueArray.push(value)
            }
        })
    })

    console.log(sampleValueArray)

    var sampleValuesMap = samples.map(sample => sample.sample_values)

    console.log(sampleValuesMap)

    })    
}
buildPlot()
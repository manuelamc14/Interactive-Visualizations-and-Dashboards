// Read the file samples.json

var  samplesData = "./samples.json"
d3.json(samplesData).then((data) => {
   console.log(data)
});

////// INIT FUNCTION //////

function init() {
    buildPlot("940")
    demographicTable("940")
};



////// DROP DOWN MENU //////

menu = d3.select("#selDataset")
function dropDownMenu () {
    d3.json(samplesData).then((data) => {
    var names = data.names;
    names.forEach((id) => {menu
        .append("option")
        .text(id)
        .property("value", id);
    })
 })
};
dropDownMenu()

//
d3.selectAll("select").on("change", function(){
    element = d3.select(this);
    idInput = element.property("value");
    console.log(idInput);

    buildPlot(idInput);
    demographicTable(idInput);

});


////// BAR & BUBBLE CHARTS //////

function buildPlot (idInput){
    var barTag = d3.select("#bar");
    barTag.html("");

    d3.json(samplesData).then((data) => {
    // Store the id in an array
    var names = data.names;

    // Find the index for the input ID
    idIndex = names.indexOf(idInput);
    console.log(idIndex);
   
    // Find the sample information for the ID
    var samples = data.samples[idIndex];
    // Use sample_values as the values for the bar chart
    var sampleValues = (samples.sample_values).slice(0,10);
    // Use otu_ids as the labels for the bar chart.
    var otuIds = (samples.otu_ids).slice(0,10);
    var otuIdLabels = otuIds.map(otu => `OTU ${otu}`);
    // Use otu_labels as the hovertext for the chart.
    var otuLabels = (samples.otu_labels).slice(0,10);

    // Build Bar chart

    var trace1 = {
        x: sampleValues,
        y: otuIdLabels,
        type: "bar",
        orientation: 'h',
        text: otuLabels,
        marker: {
            color: 'rgb(255,102,102)',
            opacity: 0.7,
            line: {
              color: 'rgb(0,0,0)',
              width: 1.5
            }
          }
    };

    var data = [trace1];

    var layout = {
        title: "Bacteria Frequency (Top 10 OTU Samples)"
    };

    Plotly.newPlot("bar", data, layout);


    // Build Buble Chart

    var sampleValuesAll = (samples.sample_values);
    // Use otu_ids as the labels for the bar chart.
    var otuIdsAll = (samples.otu_ids);
    // Use otu_labels as the hovertext for the chart.
    var otuLabelsAll = (samples.otu_labels);

    
    var trace2 = {
        type: "scatter",
        mode: "markers",
        x: otuIdsAll,
        y: sampleValuesAll,
        marker: {
            color: otuIdsAll,
            size: sampleValuesAll
        }
    };

    var dataBubbleChart = [trace2];

    var layoutBubbleChart = {
        title: "OTU Samples for Test Subject ID (All Samples)"
    };

    Plotly.newPlot("bubble", dataBubbleChart, layoutBubbleChart);


    })    
};


////// DEMOGRAPHIC INFO //////

function demographicTable (idInput){
    //idInput = '943'
    d3.json(samplesData).then((data) => {
    
    // Store the id in an array
    var names = data.names;

    // Find the index for the input ID
    idIndex = names.indexOf(idInput);
    // Store the id in an array
    var metadataInfo = data.metadata[idIndex];
    console.log(metadataInfo);
    var metadataEntries = Object.entries(metadataInfo);
    console.log(metadataEntries)
    // Get a reference for the panel body
    var pbody = d3.select("#sample-metadata");
    pbody.html("");

     metadataEntries.forEach((entry) => { 
         var line = pbody.append("h6");
         line.text(`${entry[0]}: ${entry[1]}`)
        });
    });    
};


init();
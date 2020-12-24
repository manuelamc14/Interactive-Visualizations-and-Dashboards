# Interactive-Visualizations-and-Dashboards

This project aims to build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. (Source: http://robdunnlab.com/projects/belly-button-biodiversity/)

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The dashboard has three charts:
1. Horizontal bar chart (It only includes the top 10 sample values):
      - sample_values were used as values.
      - otu_ids were used as labels.
      - otu_labels were used as the hover text.
      
2. Demographic info of the selected id:
    It includes metadata information for the selected id.

3. Bubble Char (It includes all the samples for the selected id):
    - otu_ids were used for the x values.
    - sample_values were used as the y values.
    - sample_values were used as the marker size.
    - otu_ids were used as the marker colors.
    - otu_labels were used as text values.





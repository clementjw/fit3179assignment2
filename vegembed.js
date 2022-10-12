var vg_1 = "genderrankmap.json";
var vg_2 = "linegraph.json";
var vg_3 = "splom.json";
var vg_4 = "heatmap.json"
vegaEmbed("#regionMap", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#linegraph", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#splom", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#Heatmap", vg_4).then(function(result) {}).catch(console.error);

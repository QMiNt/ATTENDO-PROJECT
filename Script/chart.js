anychart.onDocumentReady(function() {
    palette = [ "#70e336", "#d95050"]
    var data = [
        {x: "Present", value: 70},
        {x: "Absent", value: 30},
    ];
  
    var chart = anychart.pie();
    chart.innerRadius("60%");
    chart.data(data);
    chart.palette(palette);
    chart.container('piechart');
    chart.draw();
  
  });

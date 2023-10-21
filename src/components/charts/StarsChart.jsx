import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const LangChart = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Language',
        showPercentValues: '0',
        useDataPlotColorForLabels: '1',
        theme: 'fusion',
        doughnutRadius: '50%',
        borderColor: '#71717A',
        bgColor: '#272935',
        borderThickness: '1',
        showBorder: '1',
        captionFontColor: '#ffffff',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default LangChart;

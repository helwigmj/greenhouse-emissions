import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import './App.css';

const options = {
  title: "Greenhouse Emissions",
  fontSize: 14,
  hAxis: { viewWindowMode: 'pretty' },
  height: 750,
  legend: { position: "right" },
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let chartData;
      // Fetch USA data & format for chart component
      const usaData = await fetchEmissionsData('USA');
      chartData = setChartData(usaData);
      // Fetch Japan data & format for chart component
      const japanData = await fetchEmissionsData('JPN');
      chartData = addChartData(japanData, chartData, "Japan");
      // Fetch China data & format for chart component
      const chinaData = await fetchEmissionsData('CHN');
      chartData = addChartData(chinaData, chartData, "China");
      // Fetch India data & format for chart component
      const indiaData = await fetchEmissionsData('IND');
      chartData = addChartData(indiaData, chartData, "India");
      // Fetch France data & format for chart component
      const franceData = await fetchEmissionsData('FRA');
      chartData = addChartData(franceData, chartData, "France");
      // Fetch Brazil data & format for chart component
      const brazilData = await fetchEmissionsData('BRA');
      chartData = addChartData(brazilData, chartData, "Brazil");

      setData(chartData);
    }
    
    fetchData();
  }, []);

  async function fetchEmissionsData(country) {
    let dataByYearArray;
    await fetch(`https://api.worldbank.org/v2/country/${country}/indicator/EN.GHG.ALL.MT.CE.AR5?format=json&date=1972:2022&per_page=51`)
      .then(response => response.json())
      .then((json) => {
        dataByYearArray = json[1];
      })
      .catch(error => console.error(error));
    return dataByYearArray;
  }

  function setChartData(data) {
    let chartData = [];
    data.map(item => chartData.push([
      // Format string as Date to enable render in UI
      new Date(`Dec 31 ${item.date}`), 
      item.value
    ]));
    // Add x-axis and data category as initial array
    chartData.unshift(["Year", "USA"]);
    return chartData;
  }

  function addChartData(data, chartData, country) {
    data.map((item, index) => {
      if (index === 0) {
        // Add data category to initial array
        chartData[index].push(country)
      } else {
        chartData[index].push(item.value);
      }
    })

    // INFO: All include countries but USA only have data returned for years back to 1973, but the chart dataset requires a value to render
    // debugger;
    chartData[51].push("");

    return chartData;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Greenhouse Gas Emissions
        </p>
        <Chart
          chartType="ScatterChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </header>
    </div>
  );
}

export default App;

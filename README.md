# Project Description

This is a one page application comparing the Greenhouse Gas Emissions of the United States, Japan, China, India, France and Brazil from 1972 through 2022 using a Scatter chart (provided by [React Google Charts](https://www.react-google-charts.com/)). The chart comes with a date filter to adjust the visible date range, as well as the ability to change the visiblity of each included country by clicking the associated item in the legend. 

This application can been seen by visiting [Greenhouse Emissions App](https://helwigmj.github.io/greenhouse-emissions/).

## Installation

1. Clone the repository:
```bash
 git clone https://github.com/helwigmj/greenhouse-emissions.git
```

2. Install dependencies:
```bash
 npm install
 ```

This project was developed with `Node v22.13.1`.

## Deployments

1. Create an application build:
```bash
 npm run build
```

2. Create a deployment:
```bash
 npm run deploy
 ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Potential Features

1. Add [Chart Editor](https://www.react-google-charts.com/examples/advanced-chart-editor) so users have options on the kind of data visualization displayed
2. Add functionality to dynamically add data to the chart by country
3. Have the size of each data point display in ratio to to the value of the associated emissions count
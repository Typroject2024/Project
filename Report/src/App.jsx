import { Chart as ChartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from "react";
import "./App.css";



function App() {
  return (
    <>
    <div className="app">

      <h1>Bar Chart</h1>
      <Bar
      data={{
        labels: ["PT Brew", "CJ Brew", "PT Coffee powder","CJ Coffee powder","Filter Papers","Liquid Ice Cream","Theka Orange Syrup","Theka Coco Syrup","275 mi Glass Bottles","200 mi Glass Bottles"],
        datasets:[
          {
            label: "Stocks",
            data:[100,200,100,200,300,350,100,200,150,150],
            borderWidth:2,
            hoverBorderWidth:3,
            enable3d:true,
          },
        ],      
      }}
      />
    </div>

    </>
  );
}

export default App;

import React from "react";
import { Bar } from "react-chartjs-2"


const data = {
    labels: [
      "Python",
      "HTML",
      "CSS",
      "Java",
      "React",
      "mySQL"
    ],
    datasets: [
      {
        label: '',
        backgroundColor: "rgba(220,220,220,0.5)",
        data: [4, 3, 3, 4, 3, 4 ]
      }, 
    ]
};
  
const options = {
    elements: {
      rectangle: {
        borderWidth: 2,
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: 'rgba(75,192,192,1)',
        borderSkipped: 'bottom'
      }
    },
    scales:{
        xAxes: [{
            display: true,
            scaleLabel:{
                display: true,
                labelString: 'Skills'
            }
        }],
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 1,
                max: 10
            }
        }]
    },
    responsive: true,
    legend: {
        display: false,
      position: 'right'
    },
    title: {
      display: true,
      text: ''
    }
  }

  export default function BarPlot(){
      return(            
          <div id='skills'>
                <Bar data={data} options={options}/>
          </div>
      )    
  }



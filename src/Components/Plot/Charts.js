import React from 'react';
import {Line } from 'react-chartjs-2'
import '../../index.css'

const data = {
  labels: ['1st sem', '2nd sem', '3rd sem', '4th sem', '5th sem'],
  datasets: [
    {
      label: 'gpa',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(75,192,192,1)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 4,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [9.65, 9.65, 8.875, 9.71, 8.76],
    }
  ]
};

const lineOptions = {
  
  scales:{
    xAxes: [{
        display: true,
        scaleLabel:{
            display: true,
            labelString: 'Education'
        }
    }],
    yAxes: [{
        display: true,
        ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 1,
            max: 10
        },
        scaleLabel:{
          display: true,
          labelString: 'Grade Point Average'
      }
    }]
},
  legend: {
    display: true,
  },
};


export default function Charts(){
    return(            
        <div id='past'>
            <Line data={data} options={lineOptions} />
        </div>
    )    
}
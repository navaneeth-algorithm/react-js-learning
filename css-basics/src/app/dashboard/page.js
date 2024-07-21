"use client";  // Add this directive to make the component a client component
import React from 'react';
import BasicPieChart from '../components/charts/BasicPieChart';
import ScatterPlotChart from '../components/charts/ScatterPlotChart';
import BarPlotChart from '../components/charts/BarPlotChart';
import LinePlotChart from '../components/charts/LinePlotChart';


const Dashboard = () => {
  return (
    <div className='mt-2'>
      <div className='grid grid-cols-2 gap-2 justify-center'>
        <div className='bg-white shadow'>
          <BasicPieChart />
        </div>
        <div className='bg-white shadow'>
          <BarPlotChart />
        </div>
      </div>

      <div className='bg-white shadow mt-3 justify-center items-center'>
          <ScatterPlotChart />
      </div>


    </div>
  )
}

export default Dashboard;
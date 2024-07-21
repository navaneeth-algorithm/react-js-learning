"use client";  // Add this directive to make the component a client component
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const BarPlotChart = () => {
    return (
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
          width={380}
          height={300}
        />
      );
}

export default BarPlotChart
"use client";  // Add this directive to make the component a client component
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const BasicPieChart = () => {
    return (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={350}
          height={200}
        />
      );
}

export default BasicPieChart
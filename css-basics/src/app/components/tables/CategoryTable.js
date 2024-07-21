"use client";  // Add this directive to make the component a client component
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 100,headerClassName:'super-app-theme--header' },
    { field: 'categoryName', headerName: 'Category', width: 170,headerClassName:'super-app-theme--header' },
    
  ];
  
  const rows = [
    { id: 1, categoryName: 'Invoice' },
    { id: 2, categoryName: 'Report' },
    { id: 3, categoryName: 'Letter' },
    { id: 4, categoryName: 'Presentation' },
    { id: 5, categoryName: 'Memo' },
    { id: 6, categoryName: 'Contract' },
    { id: 7, categoryName: 'Manual' },
    { id: 8, categoryName: 'Agenda' },
    { id: 9, categoryName: 'Resume' },
    { id: 10, categoryName: 'Policy' },
  ];
  

const CategoryTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      );
}

export default CategoryTable
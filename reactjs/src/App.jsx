import { Typography } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Chart from './components/Todo';

const App = () => {
  return (
    <Sidebar>
      <Table />
    </Sidebar>
  );
};

export default App;

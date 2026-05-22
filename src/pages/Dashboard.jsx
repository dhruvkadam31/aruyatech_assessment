import React from 'react';
import Sidebar from '../components/layout/SideBar';

function Dashboard() {
  return (

    <div className="dashboard">
      <h1>Dashboard</h1>
          <Sidebar />

      <p>Welcome to the dashboard! Here you can find an overview of your data and activities.</p>
    </div>
  );
}

export default Dashboard;
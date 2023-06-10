import React from 'react';
import { Outlet } from 'react-router-dom';
import 'assets/styles/layouts/ClearLayout.scss';

function ClearLayout() {
  return (
    <div className="container">
      <main className="outlet">
        <Outlet />
      </main>
    </div>
  );
}

export default ClearLayout;

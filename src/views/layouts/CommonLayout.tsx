import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import 'assets/styles/layouts/CommonLayout.scss';

function CommonLayout() {
  return (
    <div className="container">
      <Header />
      <main className="outlet">
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;

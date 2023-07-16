import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import 'assets/styles/layouts/CommonLayout.scss';

function CommonLayout() {
  return (
    <div className="container">
      <Header title="헤더 이름" actionName="하이" />
      <main className="outlet">
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;

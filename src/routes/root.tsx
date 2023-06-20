import React from 'react';
import Home from 'views/Home';
import Login from 'views/Login';
import SignUp from 'views/SignUp';
import ClearLayout from 'views/layouts/ClearLayout';
import CommonLayout from 'views/layouts/CommonLayout';

export const Routes = [
  {
    path: '/',
    element: <ClearLayout />,
    // errorElement: </>,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <CommonLayout />,
    // errorElement: </>
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

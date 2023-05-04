import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accounts from './components/Accounts';
import UpiPin from './components/UpiPin';
import ShowBalance from './components/ShowBalance';
import * as serviceWorker from './serviceWorker';
import Page from './components/Ignore';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/accounts",
    element: <Accounts/>,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pin",
    element: <UpiPin />,
  },
  {
    path: "/balance",
    element: <ShowBalance />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();


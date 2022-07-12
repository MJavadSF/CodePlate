import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from 'utils/disableReactDevTools';
import 'sanitize.css/sanitize.css';
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from 'reportWebVitals';
import './locales/i18n';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import App from 'app';

const AppElements: FC = () => {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  );
};

const container: HTMLElement | any = document.getElementById('root');
const root = createRoot(container!);
root.render(<AppElements />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if (process.env.NODE_ENV === 'production') disableReactDevTools();

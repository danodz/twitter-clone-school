import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CurrentUserContext, CurrentUserProvider } from './components/CurrentUserContext';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>
);
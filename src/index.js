import React from 'react';
import ReactDOM from 'react-dom/client';
import DeleteMovieContextProvider from './store/DeleteMovieContext/DeleteMovieContextProvider';

import './index.css';
import App from './App';
import InputFormContextProvider from './store/InputFormContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DeleteMovieContextProvider><InputFormContextProvider>
  <App />
</InputFormContextProvider>
</DeleteMovieContextProvider> )
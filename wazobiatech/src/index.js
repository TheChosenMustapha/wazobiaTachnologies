// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

// // import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './app/store';
// import { createGlobalState } from 'react-hooks-global-state';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// const {setGlobalState, useGlobalState } = createGlobalState({
//   language: 'en'
// });
// export { useGlobalState, setGlobalState};
// root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import { createGlobalState } from 'react-hooks-global-state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file


// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

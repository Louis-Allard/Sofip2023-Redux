// App.js
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import NewValues from './Components/NewValues';
import Compare from './Components/Compare';

function App() {
  return (
    <Provider store={store}> 
        <NewValues label="Premier Input" />
        <NewValues label="Deuxième Input" />
        <Compare />
    </Provider>
  );
}

export default App;

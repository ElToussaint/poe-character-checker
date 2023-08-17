import React from 'react';
//import { Switch, Route } from 'react-router-dom';

import Characters from './components/Characters';

import './stylesheets/styles.css';

const App = () => {
  return (
    <div className='router'>
      <main>
        {/* <Switch>
          <Route exact path='/' component={Characters} />
          <Route exact path='/load' component={LoadNew} />
        </Switch> */}
        <Characters />
      </main>
    </div>
  );
};

export default App;

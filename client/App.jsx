import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from './components/Characters';

const App = (props) => {
  return (
    <div className='router'>
      <main>
        <Switch>
          <Route exact path='/' component={Characters} />
          <Route exact path='/load' component={LoadNew} />
        </Switch>
      </main>
    </div>
  );
};

export default App;

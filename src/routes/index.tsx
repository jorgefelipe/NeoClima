import {
    BrowserRouter,
    Switch,
    Route
  } from 'react-router-dom';

  import Home from '../pages/Home';
  import Homee from '../pages/Homee';

  export default function App() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homee}/>
        <Route path="/Home"  component={Home}/>
      </Switch>
      </BrowserRouter>

    );
  }

import {
    BrowserRouter,
    Switch,
    Route
  } from 'react-router-dom';


  import Homee from '../pages/Homee';
  import Login from '../pages/LoginPage/index';

  export default function App() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homee}/>
        <Route path="/login"  component={Login}/>
      </Switch>
      </BrowserRouter>

    );
  }

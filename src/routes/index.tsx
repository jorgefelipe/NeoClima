import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from 'pages/LoginPage/index';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

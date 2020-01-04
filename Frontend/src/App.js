import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './layout/Navbar';
import MainDashboardView from './components/dashboard/MainDashboardView';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import DetailHerdOverview from './components/detailViews/DetailHerdOverview';
import SickCows from './components/detailViews/detailComponents/SickCows';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={MainDashboardView} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/detailHerdOverview" component={DetailHerdOverview} />
            <Route path="/detailHerdOverview/SickCows" component={SickCows} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

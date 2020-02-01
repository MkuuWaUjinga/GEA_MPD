import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import MainDashboardView from './components/dashboard/MainDashboardView';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import DetailHerdOverview from './components/detailViews/DetailHerdOverview';
import SickCows from './components/detailViews/detailComponents/SickCows';
import MainChatView from './components/chat/MainChatView';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav_background">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={MainDashboardView} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/detailHerdOverview" component={DetailHerdOverview} />
          <Route path="/detailHerdOverview/SickCows" component={SickCows} />
          <Route path="/chat" component={MainChatView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

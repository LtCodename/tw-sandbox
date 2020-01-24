import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Home from './components/Home';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #15202b;
    color: #ffffff;
  }
`;

const allContent = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/explore" component={Explore}/>
            <Route exact path="/notifications" component={Notifications}/>
            <Redirect to="/home"/>
        </Switch>
    </BrowserRouter>
);

const App: React.FC = () => {
    return (
        <>
            {allContent}
            <GlobalStyles/>
        </>
    );
};

export default App;

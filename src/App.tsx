import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Home from './components/Home/Home';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Menu from "./components/Menu";
import {Row} from "./components/Layout";

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


const AllContent = styled(Row)`
`;

const allContent = (
    <AllContent>
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/notifications" component={Notifications}/>
                <Redirect to="/home"/>
            </Switch>
        </BrowserRouter>
    </AllContent>
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

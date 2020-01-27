import React, {createContext, useState} from 'react';
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

const mockTweets = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/922870890701905921/T4hOEwSe_400x400.jpg',
    name: 'Charles LeClerc',
    handle: 'charlie16',
    time: 1580164342,
    text: 'With a month until pre-season testing begins for Formula 1’s 70th anniversary year, we find ourselves in one of my favourite parts of any season.',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/877980023025803270/xntVDuTq_400x400.jpg',
    name: 'Lando Norris',
    handle: 'lando4',
    time: 1580164342,
    text: 'The story arc of the championship recently passed has finally settled, and before we have any inkling of whose car looks like what, there exists a rare moment of relative calm.',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1145899315006717952/ozxwJgmx_400x400.png',
    name: 'Lewis Hamilton',
    handle: 'lewis44',
    time: 1580164342,
    text: 'For us, at least. Deep inside the Formula 1 factories of the world, not a minute is wasted in the complex schedule of the creation of the new cars which will start to break cover in a fortnight.',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1046066104836206593/s-gl4g0F_400x400.jpg',
    name: 'Kimi Raikkonen',
    handle: 'kimi7',
    time: 1580164342,
    text: 'What’s of equal, if not slightly greater interest to me at this time of year, however, is how the drivers themselves are shaping up for this new year. ',
  },
];


const AllContent = styled(Row)`
`;

interface IValue {
    [key: string]: any;
}

export const Context = createContext<IValue>({});

const App: React.FC = () => {
    //const initialTweetsData: any = [];
    const [allTweets, setAllTweets] = useState(mockTweets);
    /*useEffect(() => {
        setAllTweets(mockTweets);
    },        [allTweets]);*/

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

    return (
        <Context.Provider value={
            {
                allTweets
            }
        }>
            {allContent}
            <GlobalStyles/>
        </Context.Provider>
    );
};

export default App;

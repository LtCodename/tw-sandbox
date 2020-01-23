import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    background-color: #15202b;
    color: #ffffff;
  }
`;

const TestText = styled.p`
    font-weight: 700;
`;

const App: React.FC = () => {
    return (
        <>
            <TestText>Some test text</TestText>
            <GlobalStyles/>
        </>
    );
};

export default App;

import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

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

const TestText = styled.p`
    font-weight: 700;
    font-size: 20px;
`;

const App: React.FC = () => {
    return (
        <>
            <TestText>Some Test Text</TestText>
            <GlobalStyles/>
        </>
    );
};

export default App;

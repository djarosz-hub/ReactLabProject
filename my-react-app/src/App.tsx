import React, {FC} from 'react';
import styled from 'styled-components';

import MainHeader from '../src/components/common/header/MainHeader';
import SidePanel from '../src/components/common/sidePanel/SidePanel';
const Wrapper = styled.div`
    justify-content: center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;
const Content = styled.div`
    max-width:1200px;
    align-items: center;
    display:flex;
`;

const App : FC = () => {
  return (
    <Wrapper>
        <MainHeader/>
        <Content>
          <SidePanel/>
          <div>tu bedzie reszta</div>
        </Content>
    </Wrapper>
  );
}

export default App;

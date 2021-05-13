import React, { FC } from 'react';
import styled from 'styled-components';
import FollowedOption from './FollowedOption';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
`;

interface IExpandedMenu {
    closeDropMenu(): void;
    myPostsOnly(val: boolean): void;
}
const ExpandedMenu: FC<IExpandedMenu> = (props) => {

    return (
        <Wrapper>
            <FollowedOption
            text={'All posts'}
            optionValue={false}
            closeDropMenu={props.closeDropMenu}
            myPostsOnly={props.myPostsOnly}/>
            <FollowedOption
            text={'My posts'}
            optionValue={true}
            closeDropMenu={props.closeDropMenu}
            myPostsOnly={props.myPostsOnly}/>
        </Wrapper>
    );
};
export default ExpandedMenu;
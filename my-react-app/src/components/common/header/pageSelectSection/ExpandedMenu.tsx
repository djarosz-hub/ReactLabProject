import React from "react";
import styled from "styled-components";
import AccountMenuSection from "./AccountMenuSection";
import MenuSection, { IMenuSection } from "./MenuSection";
import Logout from "./Logout";

const Menu = styled.div`
  display: flex;
  width:200px;
  flex-direction: column;
  border: 1px solid #a6a6a6;
  /* position:absolute; */
`;
const Input = styled.input`
    border: 1px #a6a6a6 solid;
    margin: 5px;
    &:focus{
        border: 1px solid #1670BE;
        box-shadow: 0 0 3px #1670BE;
        outline-offset: 0px;
        outline: none;
    }
    /* position:absolute; */
`;

const MiddleSection = styled(Menu)`
    border:none;
    border-top: 1px solid #a6a6a6;
    /* position:absolute; */
`;

const SectionWithScroll = styled(Menu)`
    border:none;
    overflow:auto;
    height:350px;
`;

const ProfileSection = styled(Menu)`
    border:none;
    border-top: 1px solid #a6a6a6;
`;

const LogoutSection = styled(Menu)`
    border:none;
    border-top: 1px solid #a6a6a6;
`;

class ExpandedMenu extends React.Component {
    platformSection: IMenuSection = {
        title: "Platform",
        options: [
            {
                imgSource: "../../../icons/house2.png",
                alt: "homeIcon",
                text: "Home",
                linkTo: "/",
            },
            {
                imgSource: "../../../icons/publications.png",
                alt: "publicationsIcon",
                text: "Publications",
                linkTo: "/publications",
            },
            {
                imgSource: "../../../icons/people.png",
                alt: "peopleIcon",
                text: "People",
                linkTo: "/peoples",
            },
            {
                imgSource: "../../../icons/entities2.png",
                alt: "entitiesIcon",
                text: "Entities",
                linkTo: "/entities",
            },
            {
                imgSource: "../../../icons/administration.png",
                alt: "administrationIcon",
                text: "Administration",
                linkTo: "/profile",
            }
        ]
    };

    workSpacesSection: IMenuSection = {
        title: "Workspaces",
        options: [
            {
                imgSource: "../../../icons/publications.png",
                alt: "publicationsIcon",
                text: "Client contract",
                linkTo: "/workspaces",
            },
            {
                imgSource: "../../../icons/network.png",
                alt: "networkIcon",
                text: "Supplier contract",
                linkTo: "/workspaces",
            },
            {
                imgSource: "../../../icons/entities2.png",
                alt: "entitiesIcon",
                text: "Corporate",
                linkTo: "/workspaces",
            },
            {
                imgSource: "../../../icons/ecosystem.png",
                alt: "ecosystemIcon",
                text: "Group Norms",
                linkTo: "/workspaces",
            },
            {
                imgSource: "../../../icons/comments.png",
                alt: "commentsIcon",
                text: "Real estate contracts",
                linkTo: "/workspaces",
            }
        ]
    };

    accountSection: IMenuSection = {
        title: "Account",
        options: [
            {
                imgSource: "../../../icons/privacy.png",
                alt: "privacyIcon",
                text: "Privacy",
                linkTo: "/profile"
            },
            {
                imgSource: "../../../icons/settings.png",
                alt: "settingsIcon",
                text: "Settings",
                linkTo: "/profile"
            }
        ]
    };

    render() {
        return (

            <Menu>
                <MiddleSection>
                    <Input placeholder="Filter..."/>
                    <SectionWithScroll>
                        <MenuSection
                            title={this.platformSection.title}
                            options={this.platformSection.options}
                        />
                        <MenuSection
                            title={this.workSpacesSection.title}
                            options={this.workSpacesSection.options}
                        />
                    </SectionWithScroll>
                </MiddleSection>
                <ProfileSection>
                    <AccountMenuSection
                        title={this.accountSection.title}
                        options={this.accountSection.options}
                    />
                </ProfileSection>
                <LogoutSection>
                    <Logout/>
                </LogoutSection>
            </Menu>
        );
    }
}

export default ExpandedMenu;

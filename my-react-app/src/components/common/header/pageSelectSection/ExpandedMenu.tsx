import React from "react";
import styled from "styled-components";
import AccountMenuSection from "./AccountMenuSection";
import MenuSection, { IMenuSection } from "./MenuSection";
import Logout from "./Logout";
import { IMenuOption } from "./MenuOption";

const Menu = styled.div`
    display: flex;
    width:200px;
    flex-direction: column;
    border: 1px solid #a6a6a6;
    background-color:#f7f7f7;
    position:absolute;
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
    position:relative;
`;

const MiddleSection = styled(Menu)`
    border:none;
    position:relative;
`;

const SectionWithScroll = styled(Menu)`
    border:none;
    overflow:auto;
    height:auto;
    min-height:200px;
    max-height:350px;
    position:relative;
`;

const ProfileSection = styled(Menu)`
    border:none;
    border-top: 1px solid #a6a6a6;
    position:relative;
`;

const LogoutSection = styled(Menu)`
    border:none;
    border-top: 1px solid #a6a6a6;
    position:relative;
`;
interface IExpandedMenu {
    closeDropMenu(): void;
}

class ExpandedMenu extends React.Component<IExpandedMenu> {

    state = {
        filterValue: ""
    }
    filterHandler = (val: string) => {
        this.setState({
            filterValue: val
        });
    }
    closeDropMenu = () => {
        this.props.closeDropMenu();
    }
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
        ],
        closeDropMenu: this.props.closeDropMenu
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
        ],
        closeDropMenu: this.props.closeDropMenu
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
        ],
        closeDropMenu: this.props.closeDropMenu
    };
    filterCheck = (element: IMenuOption) => {
        const input = this.state.filterValue.trim();
        if (input === "")
            return true;
        const down = input.toLowerCase();
        const text = element.text.toLowerCase();

        if (text.includes(down))
            return true; 
        return false;
    }
    
    render() {
        return (

            <Menu>
                <MiddleSection>
                    <Input placeholder="Filter..." onChange={(e) => this.filterHandler(e.target.value)} />
                    <SectionWithScroll>
                        <MenuSection
                            title={this.platformSection.title}
                            options={this.platformSection.options.filter(el => this.filterCheck(el))}
                            closeDropMenu={this.props.closeDropMenu}
                        />
                        <MenuSection
                            title={this.workSpacesSection.title}
                            options={this.workSpacesSection.options.filter(el => this.filterCheck(el))}
                            closeDropMenu={this.props.closeDropMenu}
                        />
                    </SectionWithScroll>
                </MiddleSection>
                <ProfileSection>
                    <AccountMenuSection
                        title={this.accountSection.title}
                        options={this.accountSection.options}
                        closeDropMenu={this.props.closeDropMenu}
                    />
                </ProfileSection>
                <LogoutSection>
                    <Logout />
                </LogoutSection>
            </Menu>
        );
    }
}

export default ExpandedMenu;

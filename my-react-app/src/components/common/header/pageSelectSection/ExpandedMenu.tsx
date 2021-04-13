import React from "react";
import styled from "styled-components";
import MenuSection, { IMenuSection } from "./MenuSection";

const Menu = styled.div`
  display: flex;
  width:200px;
  flex-direction: column;
  border: 1px solid #a6a6a6;
`;
const OpeningSection = styled(Menu)`

`;
const MiddleSection = styled(Menu)`
    border:none;
    border-top: 1px solid #a6a6a6;
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
                linkTo: "/",
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

    render() {
        return (

            <Menu>
                <OpeningSection>

                </OpeningSection>
                <MiddleSection>
                    <input placeholder="Filter..."></input>
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

                </ProfileSection>
                <LogoutSection>

                </LogoutSection>

            </Menu>

        );
    }
}

export default ExpandedMenu;

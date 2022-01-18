import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggleMenu }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
            <Icon onClick={toggleMenu}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggleMenu}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggleMenu}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggleMenu}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggleMenu}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
import React from 'react'
import { NavBtnLink } from '../Navbar/Navbar-SC';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarMenu
} from './Sidebar-SC';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='produse' onClick={toggle}>
                        Produse
                    </SidebarLink>
                    <SidebarLink to='despremine' onClick={toggle}>
                        Despre Mine
                    </SidebarLink>
                    <SidebarLink to='servicii' onClick={toggle}>
                        Servicii
                    </SidebarLink>
                    <SidebarLink to='testimoniale' onClick={toggle}>
                        Testimoniale
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <NavBtnLink to='/contact' onClick={toggle}>
                        CONTACT
                    </NavBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

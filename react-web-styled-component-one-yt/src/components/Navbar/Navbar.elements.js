import { Container }  from "../../GlobalStyles";
import styled from "styled-components";
import { FaMagento, } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

 
export const Nav = styled.nav`
    background-color: #101522;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    position: sticky;
    top:0;
    z-index: 9999;
`
export const NavbarContainer = styled(Container)` 
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`
export const NavLogo = styled(Link)` 
    color: #fff;
    justify-self: flex-start;
    display:flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
`
export const NavIcon = styled(FaMagento)`
    margin-right:0.5rem;
`
export const Close = styled(AiOutlineClose)` 
    color: #fff;
`
export const HamburgerMenu = styled(GiHamburgerMenu)` 
    color: #fff;
`

export const MobileIcons = styled.div` 
    display:none;

    @media screen and (max-width:960px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform : translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.ul` 
    display: flex;
    align-items: center; 
    list-style:none;
    text-align:center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        height:90vh;
        position:absolute;
        top:80px;
        left: ${({click}) => (click? 0 : '-100%')};
        opacity:1;
        transition: all 0.5 ease;
        background:#101522;
    }
`

export const NavItems = styled.li` 
    height:80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px){
        width:100%;
        
        &:hover{
            border:none;
        }
    }
`

export const NavLink = styled(Link)` 
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #fff;
    height:100%;
    padding: 0.5rem 1rem;

    @media screen and (max-width: 960px){
        text-align:center;
        padding: 2rem;
        width:100%;
        display:table;
        
        &:hover{
            color: #4b59f7;
            transition:all 0.3s ease;
        }
    }
`

export const NavItemsBtn = styled.li` 
    @media screen and (max-width: 960px){
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:120px;
    }
   
`
export const NavBtnLink = styled(Link)` 
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        padding: 8px 16px;
        width:100%;
        height:100%;
        border:0;
        outline:none;
`
import React, {useState, useEffect} from 'react';
import { Button } from '../../GlobalStyles'
import { Nav,
     NavbarContainer,
     NavLogo,NavIcon,
     MobileIcons,
     NavMenu,
     NavItems,
     NavLink,
     Close,
     HamburgerMenu,
     NavItemsBtn,
     NavBtnLink
    } from './Navbar.elements'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button , setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const handleCloseMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={handleCloseMobileMenu}>
                        <NavIcon/>
                        Nath
                    </NavLogo>
                    <MobileIcons onClick={handleClick} >{click ? <Close/> : <HamburgerMenu/>}</MobileIcons>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItems >
                            <NavLink to="/"> Home</NavLink>
                        </NavItems>
                        <NavItems >
                            <NavLink to="/services">Services</NavLink>
                        </NavItems>
                        <NavItems >
                            <NavLink to="/products">Products</NavLink>
                        </NavItems>
                        <NavItemsBtn>
                        {button ? (
                            <NavBtnLink to="/sign-up">
                              <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                            ) : (
                            <NavBtnLink to="/sign-up">
                              <Button primary Bigfont>SIGN UP</Button>
                            </NavBtnLink>
                            )}
                        </NavItemsBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;

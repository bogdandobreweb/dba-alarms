import { Fragment } from 'react';
import {Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../assets/DBA.png';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';
import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.components';

import { signOutUser } from '../../util/firebase/firebase.utils';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <img alt='logo' src={Logo} className='logo'/> 
            </LogoContainer>
           <NavLinks>
            <NavLink to='/shop'>
            SHOP
            </NavLink>
            {
                currentUser ? 
                (<NavLink as='span' onClick={signOutUser}>
                {' '}
                SIGN OUT{' '}
                </NavLink>)
                : (
                <NavLink to='/auth'>
                SIGN IN
                </NavLink>)
            }
            <CartIcon />
           </NavLinks>
           {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;
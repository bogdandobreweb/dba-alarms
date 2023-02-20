import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';

import Logo from '../../assets/DBA.png';
import './navigation.style.scss';
import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.components';

import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart-context';

import { signOutUser } from '../../util/firebase/firebase.utils';

const Navigation = () => {

const {currentUser} = useContext(UserContext);
const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <img alt='logo' src={Logo} className='logo'/> 
            </Link>
           <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            SHOP
            </Link>
            {
                currentUser ? 
                (<span className='nav-link' onClick={signOutUser}>
                {' '}
                SIGN OUT{' '}
                </span>)
                : (
                <Link className='nav-link' to='/auth'>
                SIGN IN
                </Link>)
            }
            <CartIcon />
           </div>
           {isCartOpen && <CartDropdown />}
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;
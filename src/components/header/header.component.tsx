import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { seleectCartHidden } from '../../redux/cart/cart.selectors';
import { RootState } from '../../redux/root-reducer';

interface IProps {
  currentUser?: string,
  hidden: boolean
}

const Header = ({ currentUser, hidden }: IProps) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, IProps>({
  currentUser: selectCurrentUser,
  hidden: seleectCartHidden
})

export default connect(mapStateToProps)(Header);

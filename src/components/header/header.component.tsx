import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { seleectCartHidden } from '../../redux/cart/cart.selectors';
import { RootState } from '../../redux/root-reducer';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

interface IProps {
  currentUser?: string,
  hidden: boolean
}

const Header = ({ currentUser, hidden }: IProps) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          :
          <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector<RootState, IProps>({
  currentUser: selectCurrentUser,
  hidden: seleectCartHidden
})

export default connect(mapStateToProps)(Header);

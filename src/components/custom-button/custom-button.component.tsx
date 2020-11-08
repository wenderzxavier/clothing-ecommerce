import React from 'react';

import './custom-button.styles.scss';

interface IProps {
  children: string,
  type?: any,
  onClick?: any,
  isGoogleSignIn?: boolean,
  inverted?: boolean
}

const CustomButton: React.FC<IProps> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;

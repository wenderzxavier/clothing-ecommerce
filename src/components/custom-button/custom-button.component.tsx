import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

interface IProps {
  children: string,
  type?: any,
  onClick?: any,
  isGoogleSignIn?: boolean,
  inverted?: boolean,
  className?: string
}

const CustomButton: React.FC<IProps> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;

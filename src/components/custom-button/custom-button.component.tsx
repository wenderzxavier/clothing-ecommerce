import React from 'react';

import './custom-button.styles.scss';

interface IProps {
  children: string,
  type?: any
}

const CustomButton = ({ children, ...otherProps }: IProps): JSX.Element => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;

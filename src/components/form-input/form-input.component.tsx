import React from 'react';

import './form-input.styles.scss';

interface IProps {
  handleChange: React.FormEventHandler<HTMLInputElement>,
  label?: string,
  value: string,
  type: string,
  name: string,
  required?: boolean
}

const FormInput = ({ handleChange, label, ...otherProps }: IProps): JSX.Element => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor={otherProps.name}
        className={`${otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>);

export default FormInput;
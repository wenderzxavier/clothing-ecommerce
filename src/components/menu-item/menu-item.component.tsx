import React from 'react';
import { string } from 'prop-types';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }: { title: String, imageUrl: String, size: String }) => (
  <section className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </section>
);

MenuItem.propTypes = {
  title: string.isRequired,
  imageUrl: string,
  size: string
}

MenuItem.defaultProps = {
  imageUrl: '',
  size: ''
}

export default MenuItem;
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

interface IStateProps {
  title: string,
  imageUrl: string,
  size: string,
  linkUrl: string
};

type Props = IStateProps & RouteComponentProps<any>;

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }: Props) : JSX.Element => (
  <section className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
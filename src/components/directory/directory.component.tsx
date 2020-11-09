import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { Section } from '../../redux/directory/directory.types';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { RootState } from '../../redux/root-reducer';

interface IProps {
  sections: Section[]
}

const Directory = ({ sections }: IProps): JSX.Element => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
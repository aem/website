import { eaganEducation, northeasternEducation } from '../../Constants';
import React from 'react';
import SectionHeader from './SectionHeader';

export default () => {
  return (
    <div>
      <h2>Education</h2>
      <SectionHeader rowData={northeasternEducation} />
      <SectionHeader rowData={eaganEducation} />
    </div>
  );
};

import { eaganEducation, northeasternEducation } from '../../Constants';
import React from 'react';
import SectionHeader from './SectionHeader';

export default () => {
  return (
    <div>
      <SectionHeader rowData={northeasternEducation} />
      <SectionHeader rowData={eaganEducation} />
    </div>
  );
};

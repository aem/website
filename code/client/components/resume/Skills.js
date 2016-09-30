import { languagesData } from '../../Constants';
import RankedTable from './RankedTable';
import React from 'react';

export default () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <RankedTable rowData={languagesData} />
    </div>
  );
};

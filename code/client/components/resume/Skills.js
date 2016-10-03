import { languagesData, softwareData } from '../../Constants';
import RankedTable from './RankedTable';
import React from 'react';

export default () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <RankedTable rowData={languagesData} />
      <hr />
      <RankedTable rowData={softwareData} />
    </div>
  );
};

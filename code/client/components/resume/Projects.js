import { docsSoapHeader } from '../../Constants';
import React from 'react';
import SectionHeader from './SectionHeader';

export default () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <SectionHeader rowData={docsSoapHeader} />
      <p>
        A lightweight, open-source library for parsing clipboard contents from Google Docs to valid HTML for use in a rich text editor
      </p>
    </div>
  );
}

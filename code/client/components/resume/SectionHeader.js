import { List } from 'immutable';
import React, { PropTypes } from 'react';

const SectionHeader = ({rowData}) => {
  return (
    <table className="section-header">
      <tbody>
        {rowData.map((row, index) => {
          return (
            <tr key={index}>
              <td dangerouslySetInnerHTML={{__html: row.get('left')}}></td>
              <td dangerouslySetInnerHTML={{__html: row.get('right')}}></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SectionHeader.propTypes = {
  rowData: PropTypes.instanceOf(List).isRequired
};

export default SectionHeader;

import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';

class SectionHeader extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table className="section-header">
        <tbody>
          {this.props.rowData.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.get('left')}</td>
                <td>{row.get('right')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

SectionHeader.propTypes = {
  rowData: PropTypes.instanceOf(List).isRequired
};

export default SectionHeader;

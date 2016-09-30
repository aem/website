import cx from 'classnames';
import { List } from 'immutable';
import React, { Component, PropTypes} from 'react';

class RankedTable extends Component {
  getRankingBubbles = (count) => {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += '\u25C9\u0020';
    }
    for (let i = 5; i > count; i--) {
      result += '\u25EF\u0020';
    }
    return result;
  };

  render() {
    return (
      <table className="ranked-table">
        <tbody>
          {this.props.rowData.map((row, index) => {
            return (
              <tr key={index}>
                <td
                  colSpan={row.get('right') === undefined ? 2 : 1}
                  className={cx({'single-column': row.get('right') === undefined})}
                >{row.get('left')}</td>
                {row.get('right') && <td>{this.getRankingBubbles(row.get('right'))}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

RankedTable.propTypes = {
  rowData: PropTypes.instanceOf(List).isRequired
};

export default RankedTable;

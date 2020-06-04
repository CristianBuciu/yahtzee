import React, { Component } from "react";
import "./RuleRow.styles.scss";

import ReactTooltip from "react-tooltip";

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description } = this.props;
    const disabled = score != undefined;

    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        onClick={disabled ? null : doScore}
      >
        <td data-tip={disabled ? null : description} className="RuleRow-name">
          {name}
        </td>
        <td data-tip={disabled ? null : description} className="RuleRow-score">
          {score}
        </td>
        <ReactTooltip />
      </tr>
    );
  }
}

export default RuleRow;

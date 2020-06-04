import React, { Component } from "react";
import Die from "../die/Die.component";
import "./Dice.styles.scss";

class Dice extends Component {
  render() {
    const { rolling, disabled, handleClick, locked, dice } = this.props;
    return (
      <div className="Dice">
        {dice.map((d, idx) =>
          <Die
            handleClick={handleClick}
            val={d}
            locked={locked[idx]}
            idx={idx}
            key={idx}
            disabled={disabled}
            rolling={rolling && !locked[idx]}
          />
        )}
      </div>
    );
  }
}

export default Dice;

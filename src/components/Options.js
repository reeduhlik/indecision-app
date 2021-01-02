import Option from "./Option";
import React from "react";

const Options = (props) => {
    return (
      <div>
        <div className="widget-header">
        <h2 className="widget-header__title">Your Options</h2>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.options.length == 0 && <p className="widget__message">Please add an option to get started</p>}
        {props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            count={index+1}
          />
        ))}
      </div>
    );
  };

  export default Options;
import React, { Component } from "react";

// Props : onChangeValue
export default class PlusMinus extends Component {
  state = {
    number: 1.0
  };

  addNumber = () => {
    var number = this.state.number + 0.5;
    this.setState({ number });
    this.props.onChangeValue(number);
  };

  substractNumber = () => {
    var number = this.state.number - 0.5;
    if (number < 0) number = 0;

    this.setState({ number });
    this.props.onChangeValue(number);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="pluminuscontrol">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="input-group-text" onClick={this.substractNumber}>
              -
            </button>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            disabled
          />
          <div className="input-group-append">
            <button className="input-group-text" onClick={this.addNumber}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

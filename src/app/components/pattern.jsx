import React, { Component } from 'react';

class Pattern extends Component {
  state = {
    size: 0,
  };

  handleChange = e => this.setState({ size: e.target.value });

  renderDropdown = () => {
    const sizeStrs = ['baby', 'toddler', 'child', 'adult'];
    const options = sizeStrs.map((str, index) => (
      <option key={str} value={index}>{str}</option>
    ));
    return (
      <select onChange={this.handleChange}>
        {options}
      </select>
    );
  }

  numStitches = () => {
    const { size } = this.state;
    switch (parseInt(size)) {
      case 0:
        return '56';
      case 1:
        return '64';
      case 2:
        return '72';
      case 3:
        return '80';
      default:
        return '0';
    }
  }

  render() {
    return (
      <div>
        {this.renderDropdown()}
        <ol>
          <li>CO {this.numStitches()} stitches</li>
        </ol>
      </div>
    );
  }
}

export default Pattern;


// pattern needs to have size options
// abbreviations (or this is standardized?)

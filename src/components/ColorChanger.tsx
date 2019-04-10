import * as React from 'react';
import './ColorChanger.css';

interface State {
    color: string;
}

class ColorChanger extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { color: this.randomColor() };
  }

  randomColor() {
      return '#' + Math.random().toString(16).substr(-6);
  }

  onChange = () => this.updateColor();

  updateColor() {
    const currColor = this.randomColor();
    this.setState({color: currColor});
  }
  
  render() {
    let style = { backgroundColor: `${this.state.color}` };
    return (
      <div className="color">
        <header className="color-header">
          <h1 className="color-title">Color Randomizer</h1>
        </header>
        <p className="color-intro">Click the button to change the color of square!</p>
        <button onClick={this.onChange}>click me</button>
        <div className="square" style={style}></div>
        Color: {this.state.color}
        <p className="color-intro">This is the hex code of the generated color</p>
      </div>
    );
  }
}

export default ColorChanger;
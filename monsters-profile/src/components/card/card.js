import React from "react";
import "./card.css";

export class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: {},
    };
  }

  componentDidMount() {
    fetch(this.props.monster.url)
      .then((response) => response.json())
      .then((response) => {
        const monst = {
          name: response.name,
          img: response.sprites.front_default,
        };
        this.setState({ monster: monst });
      });
  }

  render() {
    return (
      <div className="card-container">
        <img alt="monster" src={this.state.monster.img} />
        <h2>{this.state.monster.name}</h2>
      </div>
    );
  }
}

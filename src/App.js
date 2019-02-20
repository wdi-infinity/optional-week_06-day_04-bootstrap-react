import React, { Component } from "react";
import "./App.css";
import Images from "./images";

class App extends Component {
  state = {
    images: [
      "https://cdn.dribbble.com/users/1786655/screenshots/6042308/___4x.png",
      "https://cdn.dribbble.com/users/14268/screenshots/4612620/dude.png",
      " https://cdn.dribbble.com/users/5031/screenshots/5832500/at_owldribbble.gif",
      "https://cdn.dribbble.com/users/288987/screenshots/4861946/stranger.gif"
    ],
    img: ""
  };

  handelChange = e => {
    console.log(e.target.value);
    this.setState({ img: e.target.value });
  };

  addImage = () => {
    const copy = this.state.images.slice(0);

    copy.push(this.state.img);

    this.setState({
      images: copy,
      img: ""
    });
  };

  render() {
    const imgList = this.state.images.map(img => {
      return (
        <div className="col mb-3">
          <Images img={img} />
        </div>
      );
    });
    return (
      <div className="container mt-5">
        <div className="input-group mb-3">
          <input
            type="text"
            onChange={this.handelChange}
            className="form-control"
            value={this.state.img}
          />
          <div className="input-group-append">
            <button
              onClick={this.addImage}
              className="btn btn-outline-secondary"
              type="button"
            >
              Add an IMAGE !
            </button>
          </div>
        </div>

        <div className="row text-center">{imgList}</div>
      </div>
    );
  }
}

export default App;

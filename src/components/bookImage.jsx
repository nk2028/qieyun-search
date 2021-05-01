import React, { Component } from "react";
import Lightbox from "react-awesome-lightbox";
import "./bookImage.css";

export default class BookImage extends Component {
  state = {
    isModelOpen: false,
  };

  handleClick = () => {
    this.setState({ isModelOpen: true });
  };

  handleClose = () => {
    this.setState({ isModelOpen: false });
  };

  render() {
    const { thumbUrl, imageUrl, title } = this.props;

    return (
      <React.Fragment>
        <img
          className="book-image"
          src={thumbUrl}
          alt={title}
          onClick={this.handleClick}
        />
        {this.state.isModelOpen && (
          <Lightbox
            image={imageUrl}
            title={title}
            allowRotate={false}
            doubleClickZoom={0}
            onClose={this.handleClose}
          />
        )}
      </React.Fragment>
    );
  }
}

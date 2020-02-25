import React, { Component } from 'react';

class ProfileImg extends Component {
  constructor(props) {
    super(props);
    this.state = { src: null };
  }

  componentDidMount() {
    this.loadImage(this.props.name);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.loadImage(this.props.name);
    }
  }
  loadImage(name) {
    import(`../../assets/${name}`).then(image => {
      this.setState({ src: image });
    });
  }

  render() {
    return <img src={this.state.src} alt='' />;
  }
}

export default ProfileImg;

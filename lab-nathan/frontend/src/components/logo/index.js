import './_logo.scss';
import React from 'react';

class Logo extends React.Component {
  render() {
    let data = require(`../../assets/camera-icon.svg`)
    let innerHtml = {__html: data}

    return (
      <div id='logo'>
        <div id='logo-image' dangerouslySetInnerHTML={innerHtml}></div>
        <h1 id='logo-text'>Ngram</h1>
      </div>
    );
  }
}

export default Logo;
import React from 'react';
import {connect} from 'react-redux';

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.profile.avatar} />
    );
  }
}

let mapSateToProps = store => ({
  profile: store.profile
});

export default connect(mapSateToProps, undefined)(Avatar);

import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';
import {profileCreateRequest} from '../../action/profile-action.js';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
    .then(res => console.log('__RESPONSE__: ', res))
    .catch(err => console.error(err));
  }

  handleProfileUpdate(profile) {

  }

  render() {
    let onComplete = this.props.profile ?
    this.handleProfileCreate :
    this.handleProfileUpdate;

    return (
      <div className='settings'>
        <ProfileForm
          buttonText='create profile'
          onComplete={this.handleProfileCreate}
        />
      </div>
    )
  }
}

let mapStateToProps = store => ({
  profile: store.profile
})

let mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileCreateRequest(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

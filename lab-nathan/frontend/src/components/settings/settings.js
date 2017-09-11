import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form/profile-form.js';
import {profileCreateRequest} from '../../actions/profile-actions.js';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
    .then(response => {
      console.log(response);
    })
    .catch(console.error);
  }

  handleProfileUpdate() {
    // TODO
  }

  render() {
    let handleComplete = this.props.profile 
    ? this.handleProfileCreate
    : this.handleProfileUpdate;

    return (
      <div className='settings-container'>
        <h2>Profile Settings</h2>
        <ProfileForm
          buttonText='create profile'
          onComplete={this.handleProfileCreate} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(profileCreateRequest(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
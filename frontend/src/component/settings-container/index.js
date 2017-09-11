import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';
import {profileCreateRequest} from '../../action/profile-actions.js';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
    .then(res => {
      console.log('profile create response:', res);
    })
    .catch(console.error)
  }


  handleProfileUpdate(profile){
    return this.props.ProfileUpdate(profile)
    .catch(console.error)
  }

  render() {
    let handleComplete = this.props.profile
      ? this.handleProfileCreate
      : this.handleProfileUpdate

    return (
      <div className='settings-container'>
        <h2>Tell us about yourself</h2>
        <ProfileForm
          buttonText='create profile'
          onComplete={handleComplete}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(profileCreateRequest(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

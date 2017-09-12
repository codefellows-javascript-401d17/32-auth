import React from 'react';
import * as util from '../../lib/util.js';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ?
    {...props.profile, bio: ''} :
    {bio: '', avatar: null, preview: ''}

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.profile) {
      this.setState(props.porfile);
    }
  }

  onChange(e) {
    let {type, name} = e.target;
    if(name === 'bio') this.setState({bio: e.target.value});

    if(name === 'avatar') {
      let {files} = e.target;
      let avatar = files[0];
      this.setState({avatar});
      util.photoToDataURL(avatar)
      .then(preview => this.setState({preview}))
      .catch(err => console.error(err));
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return(
      <form
        onSubmit={this.onSubmit}
        className='profile-form'
      >
        <img src={this.state.preview} />
        <input
          type='file'
          name='avatar'
          onChange={this.onChange}
        />
        <textarea
          name='bio'
          type='text'
          value={this.state.bio}
          onChange={this.onChange}
        ></textarea>
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ProfileForm;

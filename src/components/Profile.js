import React from 'react';
import * as blockstack from 'blockstack';

const Profile = (props) => {
  const user = new blockstack.Person(props.profile);
  return (
    <div>
      <img src={user.avatarUrl()} alt="User Profile Avatar"/>
      <h1>{user.name()}</h1>
      <h3>{user.description()}</h3>
    </div>
  );
}

export default Profile;

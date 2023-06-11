import React from 'react';
import 'assets/styles/components/ProfileImage.scss';

type Props = {
  url: string;
}

function ProfileImage(props: Props) {
  return (
    <div className='profile-image-wrapper'>
      <img src={props.url} alt="profileImage" />
    </div>
  );
}

export default ProfileImage;

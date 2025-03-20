import React, { JSX } from 'react'
import {  ProfileData } from './RootLayout'

const ShowProfile:React.FC<ProfileData> = ({profile}) :JSX.Element => {
  return (
    <div>
        {profile.profileId}{profile.tagName}
    </div>
  )
}

export default ShowProfile
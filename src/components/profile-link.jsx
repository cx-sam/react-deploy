import React from 'react'

const ProfileLink = ({id,href, subtext}) => {
    return (
        <a className="profile-link" href={href} id={id}> {subtext} </a>
    )
}

export default ProfileLink

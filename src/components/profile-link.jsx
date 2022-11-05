import React from 'react'
import {Link} from 'react-router-dom';
const ProfileLink = ({id,href, subtext}) => {
    return (
        <Link  className="profile-link" to={href} id={id}> {subtext} </Link>
    )
}

export default ProfileLink

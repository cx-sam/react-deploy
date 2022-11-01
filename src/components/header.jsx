import React from 'react'

const header = ({slack,twitter, imgUrl, altText}) => {
    return (
        <div>
            <img src={imgUrl} id="profile__img" alt={altText}/>
            <h2 id="twitter"> {twitter} </h2>
            <h2 id="slack"> {slack} </h2>
            
        </div>
    )
}

export default header

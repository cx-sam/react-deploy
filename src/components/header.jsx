import React from 'react'

const header = ({slack,twitter, imgUrl, altText}) => {
    return (
        <div className='new'>
            <div className='newOne'>
            <img src={imgUrl} id="profile__img" alt={altText}/>
            <h2 id="twitter"> {twitter} </h2>
            <h2 id="slack"> {slack} </h2>
            </div>
            <div className='newTwo'>
                <img src='/arrow.png' alt='share' className='arrow'/>
                <img src='/dots.png' alt='share' className='dots'/>
            </div>
            
        </div>
    )
}

export default header

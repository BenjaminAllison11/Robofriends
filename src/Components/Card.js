import React from 'react';

const Card = ({ name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 tc'>
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h1 className='f7'>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
        )
}

export default Card
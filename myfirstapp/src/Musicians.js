import React from 'react';

const Musicians = ({musicians}) => {
    console.log(musicians);
    const musicianList = musicians.map( musician => {
        return (
            <div className="musician" key={musician.id}>
                <div>Name: {musician.name}</div>
                <div>Age: {musician.age}</div>
                <div>Genre: {musician.genre}</div>
                <br/>
            </div>
        )
    })
    return (
        <div className="musician-list">
            {musicianList}
        </div>
    )
}

export default Musicians
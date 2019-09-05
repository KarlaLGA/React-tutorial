import React from 'react';

const Musicians = ({musicians}) => {
    console.log(musicians);
    // CONDITION USING IF STATEMENT

    // const musicianList = musicians.map( musician => {
    //     if (musician.age > 30 ){

    //         return (
    //             <div className="musician" key={musician.id}>
    //                 <div>Name: {musician.name}</div>
    //                 <div>Age: {musician.age}</div>
    //                 <div>Genre: {musician.genre}</div>
    //                 <br/>
    //             </div>
    //         )
    //     }
    //     else {
    //         return null
    //     }
    // });

    // return (
    //     <div className="musician-list">
    //         {musicianList}
    //     </div>
    // )


    // CONDITION USING TERNIARY OPERATOR

    const musicianList = musicians.map ( musician => {
        return musician.age > 30 ? (
             <div className="musician" key={musician.id}>
                <div>Name: {musician.name}</div>
                <div>Age: {musician.age}</div>
                <div>Genre: {musician.genre}</div>
                <br/>
            </div>
        ) : null
    });
    
    return (
        <div className="musician-list">
            {musicianList}
        </div>
    )


    // CONDITION INSIDE RETURN TEMPLATE

    // return (
    //    <div className='musician-list'>
    //        {
    //            musicians.map(musician => {
    //                return musician.age > 30 ? (
    //                <div className='musician' key={musician.id}>
    //                     <div>Name: { musician.name } </div>
    //                     <div>Age: { musician.age } </div>
    //                     <div>Genre: { musician.genre } </div>
    //                </div>
    //                ) : null;
    //            })
    //        }
    //    </div> 
    // )
}

export default Musicians
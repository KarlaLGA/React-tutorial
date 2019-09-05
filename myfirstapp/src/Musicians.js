import React from 'react';

const Musicians = ({musicians, deleteMusician}) => {
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
                <button onClick={() => {deleteMusician(musician.id)}} className="musician-btn">Delete musician</button>
                {/* when we want to add a function imported from the root component */}
                {/* create an anonymous arrow function that encloses the function we are receiving as a prop from the root component */}
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
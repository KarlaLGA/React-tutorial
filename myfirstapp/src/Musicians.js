import React, { Component } from 'react';

class Musicians extends Component {
    render(){
        console.log(this.props);
        const { musicians } = this.props;
        const musicianList = musicians.map( musician => {
            return (
                <div className="musician" key={musician.id}>
                    <div>Name: {musician.name}</div>
                    <div>Age: {musician.age}</div>
                    <div>Genre: {musician.genre}</div>
                </div>
            )
        })
        return (
            <div className="musician-list">
                {musicianList}
            </div>
        )
    }
}

export default Musicians
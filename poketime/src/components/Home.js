import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     // asynchronous, it returns a promise

    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             posts:res.data.slice(0,10)
    //         })
    //     }) 
    //     //code that runs after the get has completed
    // }
    render () {
        console.log(this.props)

        const {posts} = this.props;

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id} id={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={`/${post.id}`}> 
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
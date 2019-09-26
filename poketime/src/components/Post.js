import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component{
    whenClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }
    // state = {
    //     post: null
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.post_id;

    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    // }
    render() {
        console.log(this.props)

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.whenClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">

                {post}

            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatchMethod) => {
    return {
        deletePost: (post_id) => {
            dispatchMethod(deletePost(post_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
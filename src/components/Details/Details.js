import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    //this function takes user back to movie list
    back=()=>{
        console.log('go back home from details page');
        this.props.history.push('/')
    }

    // showGenres=(movieId)=>{
    //     this.props.dispatch({type: 'GET_GENRES', payload:movieId})
    // }


//sending props to /edit with history.push
    editMovie = (event) => {
        console.log('pressed edit button details page');
        this.props.history.push({
            pathname: '/edit',
            state: {
                id: event.id,
                title: event.title,
                poster: event.poster,
                description: event.description,
                genre: event.genre
            }
        });
    };

    render() {
        //displays title description and genre of movie on details page
        console.log('in details component', this.props.location.state)
        return (
        <div className="details">
             
            <h1 className="site-title">DETAILS</h1>
            <h1>{this.props.location.state.title}</h1>
            <div className="movieDisplay" key={this.props.location.state.id}>
                <img src={this.props.location.state.poster} alt='poster'></img>
            </div>
            <p><b>Movie Genre: {this.props.location.state.genre}</b></p>
            <p>{this.props.location.state.description}</p>
            <button onClick={this.back}>Back to Movie List</button>
            <button onClick={() => this.editMovie(this.props.location.state)}>Edit</button>
            
        
        </div>
        );
    }
}
//connects us to use reducer in this component
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Details);
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    //this function takes user back to movie list
    back=()=>{
        console.log('go back home from details page');
        this.props.history.push('/')
    }

    editMovie = flick => {
    this.props.history.push({
      pathname: "/edit",
      state: {
        id: flick.id,
        title: flick.title,
        poster: flick.poster,
        description: flick.description
      }
    });
    };

    render() {
        console.log('in details component', this.props.location.state)
        return (
        <div className="details">
            <h1 className="site-title">DETAILS</h1>
            <h1>{this.props.location.state.title}</h1>
            <div className="movieDisplay" key={this.props.location.state.id}>
                <img src={this.props.location.state.poster} alt={this.props.location.state.poster}></img>
            </div>
            <p>{this.props.location.state.description}</p>
            <button onClick={this.back}>Back to Movie List</button>
            <button onClick={() => this.editMovie(this.props.location.state)}>Edit</button>

        </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Details);
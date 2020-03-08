import React, { Component } from 'react';
import {connect} from 'react-redux';

class Edit extends Component {
    state={
        movieEdits: {
            movieTitle: this.props.location.state.title,
            movieDescription: this.props.location.state.description,
            sendId: '',
        }
    }

    handleChangeForDescription = (movieDescription, event) => {
        console.log('handle change for description', event.target.value)
        this.setState({
            movieEdits: {
                 movieDescription: event.target.value,
                 sendId: this.props.location.state.id,
                 movieTitle: this.props.location.state.title,
            }
        });
    }
    handleChangeForTitle = (movieTitle, event) => {
        console.log('handle change for title', event.target.value)
        this.setState({
            movieEdits: {
                movieDescription: this.props.location.state.description,
                sendId: this.props.location.state.id,
                movieTitle: event.target.value, 
            }
        });
    }   

    back=()=>{
        console.log('go back to details page from edit');
        this.props.history.push({
            pathname: "/details",
            state: {
              id: this.props.location.state.id,
              title: this.props.location.state.title,
              poster: this.props.location.state.poster,
              description: this.props.location.state.description,
              genre: this.props.location.state.genre
            }
          });
    }

    saveNewInfo = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'INPUT_UPDATE', payload: this.state.movieEdits})
        this.setState({
            movieEdits: {
                movieDescription: '',
                movieTitle: ''
            } 
        });
        this.props.history.push('/')
    }

  render() {
    return (
        <div className="App">
            <h1> Edit Page</h1>
            <h1>{this.props.location.state.title}</h1>
            <img src={this.props.location.state.poster} alt={this.props.location.state.poster}></img>
            <p>{this.props.location.state.description}</p>
            <input placeholder="Change Title" 
                onChange={(event) => this.handleChangeForTitle('title', event)}></input>
            <br/>
                <textarea rows="5" cols="50" placeholder="Change Description"
                    onChange={(event) => this.handleChangeForDescription('description', event)}>
                </textarea>
            <br/>
            <button onClick={this.back}>Cancel</button>
            <button onClick={this.saveNewInfo}>Save Changes</button>
        </div>
    );
}
  
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Edit);
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Edit extends Component {
    state={
        movieEdits: {
            movieTitle: '',
            movieDescription: '',
            sendId: '',
        }
    }

     //changes description and title on edit page
    handleChangeFor = (fieldName, event) => {
        let newMovieChanges = {
         ...this.state.movieEdits
       };
       console.log(this.state.movieEdits);
       if (fieldName === "description") {
         newMovieChanges.movieDescription = event.target.value;
       } else if (fieldName === "title") {
         newMovieChanges.movieTitle = event.target.value;
       }
       this.setState({
         movieEdits: newMovieChanges
       });
     };


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
       console.log('in saveNewInfo on edit page');
       
        this.props.dispatch({ 
            type: 'EDIT_MOVIES', 
            payload: {...this.state.movieEdits, sendId:this.props.location.state.id}
        });
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
             {this.props.location.state && (
                  <>
            <h1> Edit Page</h1>
           
            <h1>{this.props.location.state.title}</h1>
            <img src={this.props.location.state.poster} alt={this.props.location.state.poster}></img>
            <p>{this.props.location.state.description}</p>
            <input placeholder="Change Title" 
                onChange={(event) => this.handleChangeFor('title', event)}></input>
            <br/>
            <form>
                <textarea rows="5" cols="50" placeholder="Change Description"
                    onChange={(event) => this.handleChangeFor('description', event)}>
                </textarea>
            </form>
            <br/>
            <button onClick={this.back}>Cancel</button>
            <button onClick={this.saveNewInfo}>Save Changes</button>
            </>
             )}
             
        </div>
    );
}
  
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Edit);
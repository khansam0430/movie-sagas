import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {Link} from 'react-router-dom';
// import swal from 'sweetalert';

// import Favorite from '../Favorite/Favorite';

class Home extends Component {
    componentDidMount = () => {
        this.getMovies();
      };
    
      getMovies = () => {
        this.props.dispatch({ type: "FETCH_MOVIES" });
      };


  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          {/* display movies by looping through db and mapping through movies reducer */}
         <ul> 
            {this.props.reduxState.movies.map(flick => (<li key={flick.id}>
                <img src={flick.poster} alt={flick.title}></img> <br/>{flick.title} <br/>{flick.description}
                </li>))}
                </ul>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Home);
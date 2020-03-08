import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

// import swal from 'sweetalert';

class Home extends Component {
    componentDidMount = () => {
        this.getMovies();
      };
    
      getMovies = () => {
        this.props.dispatch({ type: "FETCH_MOVIES" });
      };

      onClick = (flick) => {
        console.log('in imageClick from home', flick);
        this.props.history.push({
            pathname: '/details',
            state: {
                id: flick.id,
                title: flick.title,
                poster: flick.poster,
                description: flick.description
            }
        });
    };

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          {/* display movies by looping through db and mapping through movies reducer */}
          {this.props.reduxState.movies && (
         <ul> 
            {this.props.reduxState.movies.map(flick => (<li key={flick.id}>
                <img src={flick.poster} alt={flick.title} onClick={() => this.onClick(flick)}></img> 
                <br/>{flick.title} <br/>{flick.description}
                </li>))}
        </ul>
          )}
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Home);
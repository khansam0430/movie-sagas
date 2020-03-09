import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

// import swal from 'sweetalert';

class Home extends Component {
    componentDidMount = () => {
        this.getMovies();
        
      };
    //dispatching to fetch movies saga
      getMovies = () => {
        this.props.dispatch({ type: "FETCH_MOVIES" });
      };

//on click this function passes props to details page and pushes user to /details
      onClick = (flick) => {
        console.log('in imageClick from home', flick);
        this.props.history.push({
            pathname: '/details',
            state: {
                id: flick.id,
                title: flick.title,
                poster: flick.poster,
                description: flick.description,
                genre: flick.name
            }
        });
    };

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          {/* display movies on dom by mapping (loop) through db and mapping through movies reducer */}
          
         
            {this.props.reduxState.movies.map(flick => (<p key={flick.id}>
                <img src={flick.poster} alt={flick.title} onClick={() => this.onClick(flick)}></img> 
                <br/>{flick.title} <br/>{flick.description}
                </p>))}
        
          
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(Home);
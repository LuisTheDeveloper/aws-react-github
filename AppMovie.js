import React from 'react';
import './App.css';
import CardList from './Cardlist';
import FormMovies from './FormMovies';

class App extends React.Component {
    state = {
        movies: [],
    };
    addNewMovie = (movieData) => {
        this.setState(prevState => ({
            movies: [...prevState.movies, movieData]
        }))
    };

    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <FormMovies onSubmit={this.addNewMovie} />
                <CardList movies={this.state.movies} />
            </div >
        );
    }
}

export default AppMovie;
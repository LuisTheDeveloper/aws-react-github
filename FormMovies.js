import React from 'react';
import axios from 'axios';

class FormMovies extends React.Component {
    state = { movieName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://omdbapi.com/?s=${this.state.movieName}&apikey=6a07c858`);
        this.props.onSubmit(resp.data);
        this.setState({ movieName: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.movieName}
                    onChange={event => this.setState({ movieName: event.target.value })}
                    placeholder="Movie Name"
                    required />
                <button>Add movie</button>
            </form>
        );
    }
}

export default FormMovies;
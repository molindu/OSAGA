import { connect } from "react-redux";
import MovieComponent from "../components/MovieComponent";

import { addMovieAction, fetchFailedAction, fetchMoviesAction, fetchSuccessAction } from "../actions";
const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        }
    };
};
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;
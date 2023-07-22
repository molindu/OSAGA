const urlGetMovies = 'https://portfolio-molindu-1.000webhostapp.com/movies.json';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    return movies;
}

export const Api = {
    getMoviesFromApi
};
import React from "react"
import {Movies} from "../components/Movies"
import {Preloader} from "../components/Preloader"
import {Search} from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies:[],
        loadig: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loadig: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loadig: false})
        })
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loadig: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loadig: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loadig: false})
        })
    }

    render () {
        const {movies, loadig} = this.state;

    return <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {
            !loadig ? 
            (<Movies movies={movies} />)
            : <Preloader/>
        }           
        </main>
    }  
}

export {Main}
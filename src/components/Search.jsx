import React from "react"

class Search extends React.Component {
    state = {
        search: 'matrix',
        type: 'all'
    } 
      handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
      }
    
      handleFilter = (e) => {
        this.setState( () => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
      }

    render () {
        return <div className="row">
        <div className="input-field col s12">
          <input 
          placeholder="search" 
          type="search" 
          className="validate"
          value={this.state.search}
          onChange={(e) => this.setState({search: e.target.value})}
          onKeyDown={this.handleKey}
          />
          <button 
          className="btn search-btn"
          onClick={() => {this.props.searchMovies(this.state.search, this.state.type)}}
          >Search</button>         
        </div>
        <div className="row">
        <p className="col s2">
          <label>
            <input name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
            <span>All</span>
          </label>
        </p>
        <p className="col s2">
          <label>
            <input name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
            <span>Movies</span>
          </label>
        </p>
        <p className="col s2">
          <label>
            <input  name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
            <span>Series</span>
          </label>
        </p>
        </div>
      </div>
    }
}
export {Search}
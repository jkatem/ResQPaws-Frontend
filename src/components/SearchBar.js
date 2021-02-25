import React, { Component } from 'react'
// import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <div id="search-bar">
                <form>
                    <label htmlFor="search">Search</label>
                    <input id="search" type="search" placeholder="Search..." autoFocus required />
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    }
}


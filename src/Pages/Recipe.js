import React, { Component } from 'react'
import RecipeList from "../components/RecipeList"
import Search from "../components/Search"
import {recipeData} from "../components/data/tempList";

export default class Recipe extends Component {
    constructor (props){
        super(props)
    }
    state = {
        recipes:recipeData,
        search: ""
    }
    handleSubmit = (e) => {
        e.preventDefault()
    };
    handleChange = (e) => {
        this.setState({
            search:e.target.value
        })
    };
    render() {
        return (
    
           <>
           <Search  search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Search>
           <RecipeList recipes={this.state.recipes}></RecipeList>
           </>
        )
    }
}

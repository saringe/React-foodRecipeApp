import React, { Component } from 'react'
import Recipe from "./Recipes"

export default class RecipeList extends Component {
    render() {
        return (
            <div>
                hello from recipe list
                <Recipe></Recipe>
            </div>
        )
    }
}

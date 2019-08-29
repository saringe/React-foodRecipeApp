import React, { Component } from 'react'
import Recipe from "./Recipes"

export default class RecipeList extends Component {
    render() {
        const {recipe} = this.props;
        return (
            <>
             <div className="container py-5">
                 <div className="row">
                     <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                         <h1 className="text-Slant">
                             recipe list
                         </h1>

                     </div>

                 </div>
                hello from recipe list
                <Recipe></Recipe>
            </div>
            </>
           
        )
    }
}

import React, { Component } from 'react'
import {recipeData} from "../components/data/tempDetails";
import {Link} from "react-router-dom";

export default class SingleRecipe extends Component {
    constructor(props){
        super(props);
        const id= this.props.match.params.id;
        this.state = {
            recipe: {},
            id,
            loading: true 

        };
    }
    async componentDidMount(){
        const url=`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;

        try{
            const response = await fetch(url);
            const responseData = await response.json();
            this.setState({
                recipe: responseData.recipe,
                loading: false
            });
        }
        catch(error){
            console.log(error)
        }
    };
    
    render() {
        const {image_url, publisher_url, ingredients, publisher, source_url, title} = this.state.recipe;
        if (this.state.loading){
            return(
                <div className="container"> 
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 text-Orange"><h1>Loading Recipes...</h1></div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize"> back to recipe list</Link>
                        <img src={image_url} className="d-block w-100" style={{maxHeight: "30rem"}} alt="recipe"></img>
                    </div>
                
                <div className="col-10 mx-auto col-md-6 my-3">
                    <h6 className="text-uppercase">{title}</h6>
                    <h6 className="text-capitalize text-Slant text-warning">provided by {publisher}</h6>
                    <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
                    <a href={source_url} target="_blank" rel="noopener noreferrer" class="btn btn-success mt-2 mx-2 text-capitalize">recipe url</a>
                    <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4">ingredients</h2>
                        {ingredients.map((item, index)=>{
                            return(<li key={index} className="list-group-item text-Slant">{item}</li>)
                        })}
                    </ul>
                 </div>
            </div>
            </div>
        ) 
    }
}

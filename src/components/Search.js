import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        const {handleChange, handleSubmit, search}= this.props
        return (
            <div className="container">
             <div className="row">
                 <div className="col-10 mx-auto mt-5 text-center">
                     <h1 className="text-Slant text-capitalize">
                         Search recipes with <strong className="text-Orange">food2Fork</strong>
                     </h1>
                     <form className="mt-4">
                         <label htmlFor="Search" className="text-capitalize">type recipes separated by comma</label>
                         <div className="input-group">
                             <input type="text"
                             name="search"
                                 className="form-control"
                                     placeholder="Chicken, peas, spinach"
                                     value={search}
                                     onChange={handleChange}>
                             </input>
                             <div className="input-group-append">
                                 <button type="submit" className="input-group-text bg-primary text-white" onClick ={handleSubmit}>
                                     <i className="fas fa-search"></i>

                                 </button>
                             </div>

                         </div>

                     </form>

                 </div>

             </div>
            </div>
        )
    }
}

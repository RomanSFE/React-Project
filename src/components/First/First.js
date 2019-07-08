import React, { Component } from 'react'

class First extends Component{
    render(){
        return(
            <div>
                <h1> My First React Component</h1>
                <div className="prp"><h2>{ this.props.myprops }</h2></div>
                <p>Some text and</p>
                <a href="https://google.com">Google</a>
            </div>
        )
    }
}
export default First
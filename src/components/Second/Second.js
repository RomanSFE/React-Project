import React, { Component } from 'react'

class Second extends Component{

    constructor(props){
        super(props)
        this.state = {
            count: 10,
            color: 'white'
        }
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
        if(this.state.count <= 5){
            this.setState({
                color: 'green'
            })
        } else if(this.state.count >= 15){
            this.setState({
                color: 'blue'
            })
        } else{
            this.setState({
                color: 'white'
            })
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })

        if(this.state.count <= 5){
            this.setState({
                color: 'green'
            })
        } else if(this.state.count >= 15){
            this.setState({
                color: 'blue'
            })
        } else{
            this.setState({
                color: 'white'
            })
        }

    }


    render(){
        return(
            <div className="secondd">
                <h2>State Component</h2>
                <h1 style={{ color: this.state.color }}><span onClick={ this.decrease}> - </span> 
                <p>{ this.state.count}</p> 
                <span onClick={ this.increase }> + </span></h1>
            </div>
        )
    }
}

export default Second
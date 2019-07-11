import React, { Component } from 'react'


const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country: '',
    gender: '',
    skills: ''
}
class Forms extends Component {

    constructor(){
        super()
        this.firstForm = React.createRef()
    }

    state = {
        ...initialState
    }

    changeHandler = ( event ) => {
        if( event.target.type === 'checkbox' ) {
            if( event.target.checked) {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat( event.target.value )
                })
            } else {
                this.setState({
                    ...this.state,
                skills: 
                this.state.skills.filter(skill => skill !== event.target.value)
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };
    submitHandler = event => {
        event.preventDefault()

        console.log(this.state)

        this.firstForm.current.reset()
        this.setState({
            ...initialState
        })
    }



    render() {
        return (
            <form ref= { this.firstForm } onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Full Name</label>
                    <input type="text" name="name" id="name" 
                    value={ this.state.name } onChange={ this.changeHandler } />
                </div>

                <div className="form-group">
                    <label className="form-control" htmlFor="email">Enter Your Email</label>
                    <input type="email" name="email" id="email" 
                    value={ this.state.email } onChange={ this.changeHandler } />
                </div>
            
                <div className="form-group">
                    <label htmlFor="password">Enter Your Password</label>
                    <input className="form-control" type="password" name="password" id="password" 
                    value={ this.state.password } onChange={ this.changeHandler } />
                </div>
            
                <div className="form-group">
                    <label htmlFor="bio">Enter Your bio</label>
                    <textarea className="form-control" type="text" name="bio" id="bio" 
                    value={ this.state.bio } onChange={ this.changeHandler } />
                </div>
            
                <div className="form-group">
                    <label htmlFor="country">Select Country</label>
                    <select className="form-control" name="country" id="country" 
                    value={ this.state.country } onChange={ this.changeHandler }>
                        <option value="bangladesh"> Bangladesh </option>
                        <option value="canada"> Canada </option>
                        <option value="brazil"> Brazil </option>
                    </select>
                </div>
            
                <div className="form-group">
                    <div className="form-check">
                    <label htmlFor="country">Select your gender</label>
                        <label htmlFor="gender1"> Male </label>
                        <input className="form-control" type="radio" name="gender" id="gender1" 
                        value='male' onChange={ this.changeHandler } />
                    </div>
                    <div className="form-check">
                        <label htmlFor="gender2"> Female </label>
                        <input className="form-control" type="radio" name="gender" id="gender2" 
                        value='female' onChange={ this.changeHandler } />
                    </div>
                    
                    <div className="form-check">
                        <label htmlFor="gender3"> Other </label>
                        <input className="form-control" type="radio" name="gender" id="gender3" 
                        value='other' onChange={ this.changeHandler } />
                    </div>
                </div>
            
                <div className="form-group">
                    <div className="form-check">
                        <input onChange={ this.changeHandler } name="skills" className="form-check-input" type="checkbox" id="js" value='javascript'/>
                        <label htmlFor="js"> JavaScript </label>
                    </div>
                
                    <div className="form-check">
                        <input onChange={ this.changeHandler } name="skills" className="form-check-input" type="checkbox" id="react" value='React js'/>
                        <label htmlFor="react"> React js </label>
                    </div>
                
                    <div className="form-check">
                        <input onChange={ this.changeHandler } name="skills" className="form-check-input" type="checkbox" id="vue" value='Vue js'/>
                        <label htmlFor="vue"> Vue js </label>
                    </div>
                </div>
                <button className="btn btn-outline-primary" type="submit"> Submit Now </button>
            </form>
        )
    }
}
export default  Forms

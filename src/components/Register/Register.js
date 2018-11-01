import React, {Component} from 'react';

export default class Register extends Component{
    state={
        name:'',
        registerEmail:'',
        registerPassword:'',
    }
    
    onNameChange=(event)=>{
            this.setState({name:event.target.value})
    }
    
    onEmailChange=(event)=>{
        this.setState({registerEmail:event.target.value})
    }

    onPasswordChange=(event)=>{
        this.setState({registerPassword:event.target.value})
    }

    onRegisterSubmit=()=>{
        fetch('http://localhost:3000/register',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.registerEmail,
                password:this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data)
            {
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const {onRouteChange} = this.props;
    return(
        <article className="br3 ba dark-gray b--black-10 mv6 w-100 shadow-5 w-40-m w-50-l mw6 center">    
            <main className="pa4 black-80">
                <div className="measure">
                <fieldset id="Register" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input
                        onChange={this.onNameChange} 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name"  
                        id="name"/>
                    </div>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        onChange={this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input
                            onChange={this.onPasswordChange} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"/>
                    </div>
                </fieldset>
                <div className="">
                    <input 
                        onClick={this.onRegisterSubmit}
                        className="ph3 pv2 input-reset ba b--black baskerville i b bg-transparent grow pointer f5 dib"
                        type="submit" 
                        value="Register"/>
                </div>
                    <div className="lh-copy mt3">
                        <p
                         onClick={()=>onRouteChange('signin')} 
                         className="f5 b link grow underline black pointer db">Sign in</p>
                    </div>
                </div>
        </main>
  </article>
    );
   }
}

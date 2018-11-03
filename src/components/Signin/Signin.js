import React, {Component} from 'react';

export default class Signin extends Component{
    state = {
        signInEmail:'',
        signInPassword:''
    }

    onEmailChange = (event) => {
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({signInPassword:event.target.value})
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => { 
            if(user.id) {
                this.props.loadUser(user);
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
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                        onClick={this.onSubmitSignin}
                        className="ph3 pv2 input-reset ba b--black baskerville i b bg-transparent grow pointer f5 dib"
                        type="submit" 
                        value="Sign in"/>
                </div>
                    <div className="lh-copy mt3">
                        <p 
                          onClick={()=>onRouteChange('register')} className="f6 link pointer grow b black underline db">Register</p>
                    </div>
                </div>
        </main>
  </article>
    );
   }
}

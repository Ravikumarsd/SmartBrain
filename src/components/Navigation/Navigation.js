import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';
import {withSize} from 'react-sizeme';
import SmallLogo from '../Logo/SmallLogo';
const Navigation = ({size}) => {
    return (
        <div className="card">
            <header className="black-80 tc pv2 avenir" >
              <h1 className="mt1 mb0 baskerville i b fw1 f1">Smart Brain</h1>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <nav className="mw7 bt mt2 mr3" >
                        <a className="f3 f5-l link bg-animate black-80 b i  baskerville grow dim dib pa3 ph4-l" href="/">Home</a>
                        <a className="f3 f5-l link bg-animate black-80 b i baskerville grow dim dib pa3 ph4-l" href="/portfolio">Signup</a>
                        <a className="f3 f5-l link bg-animate black-80 b i baskerville grow dim dib pa3 ph4-l" href="/about">Signin</a>
                    </nav>
                </div>
            </header>
            <div style={{height:'10px'}}>
                {
                  (size.width >=600) ? 
                  <div className="logo"><Logo/></div>
                  :(size.width<400) ? 
                  null : <div className="smalllogo"><SmallLogo/></div>
                }
             </div>
        </div>
    );
}

export default withSize() (Navigation);
import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';
import {withSize} from 'react-sizeme';
import SmallLogo from '../Logo/SmallLogo';

const Navigation = ({size,onRouteChange}) => {
    return (
        <div className="card">
            <header className="black-80 tc pv2 avenir" >
              <h1 className="mt1 mb0 baskerville i b fw1 f1">Smart Brain</h1>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <p
                            onClick={()=>onRouteChange('signin')}
                            className="f3  link pointer underline bg-animate black-80 b i baskerville grow dim dib pa3 ph4-l" 
                             >Sign out</p>
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

export default withSize()(Navigation);
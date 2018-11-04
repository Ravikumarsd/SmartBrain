import React from 'react';

const Rank = ({name,entries}) =>{
    return(
        <div>
            <h2 className="f2 pl4 black-70 center i">
            {`${name}, your current entry count is....`}</h2>
            <h1 className='center white-80 f1 baskerville'>
            {`${entries}`}</h1>
        </div>
    );
}
export default Rank;
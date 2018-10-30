import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChange,onButtonClick}) => {
    return (
        <div className='pa3'>
            <p className='center baskerville f3'>{`This magic brain will detect your face. Give it a try`}</p>
            <div>
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" 
                           type='text' 
                           onChange={onInputChange}/>
                    <button
                     className="w-30 grow baskerville b pointer f4 link ph3 pv2 dib white bg-light-purple" 
                     onClick={onButtonClick}>Detect</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;
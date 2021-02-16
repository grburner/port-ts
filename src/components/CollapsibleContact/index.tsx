import React from 'react';
import './style.css';
import '../../global.css';

const CollapsibleContact: React.FC = () => {
    return(
        <div className={'contact-row'}>
            <ul id={'contact-block'}>
                <li className={'contact-item'}><p>{'grburner@gmail.com'}</p></li>
                <li className={'contact-item'}><p><a href={'https://github.com/grburner'} target={'_blank'} rel={'noreferrer'}>{'github.com/grburner'}</a></p></li>
                <li className={'contact-item'}><p><a href={'https://linkedin.com/in/gburner'} target={'_blank'} rel={'noreferrer'}>{'linkedin.com/in/gburner'}</a></p></li>
            </ul>
        </div>
    )
};

export default CollapsibleContact;
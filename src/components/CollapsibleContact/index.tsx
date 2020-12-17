import React from 'react';
import './style.css'

const CollapsibleContact: React.FC = () => {
    return(
        <div className={'contact-row'}>
            <ul>
                <div></div>
                <li><p>{'email'}</p></li>
                <li><p><a href={'https://github.com/grburner'} target={'_blank'} rel={'noreferrer'}>{'github'}</a></p></li>
                <li><p><a href={'https://www.linkedin.com/in/gburner/'} target={'_blank'} rel={'noreferrer'}>{'linkedin'}</a></p></li>
            </ul>
        </div>
    )
};

export default CollapsibleContact;
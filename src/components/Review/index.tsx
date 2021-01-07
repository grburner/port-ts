import React from 'react';
import './style.css';
import '../../global.css';

interface ReviewProps {
    text: string,
    author: string
}

const ReviewGroup: React.FC<ReviewProps> = (props) => {

    return (
        <div>
            <p>{'"' + props.text + '"'}</p>
            <p className={"sub-text"}>{'- ' + props.author}</p>
        </div>
    )
};

export default ReviewGroup
import React, { useContext } from 'react';
import './style.css';
import PortfoioContext from "../../utils/context";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

const ArrowBar: React.FC = () => {
    const { projectArrangement } = useContext(PortfoioContext)

    const dotRenderer = () => {
        return (<div>
            {projectArrangement.map((project, index) => (
                <div className={'dot'}><GoPrimitiveDot /></div>
            ))}
            </div>);
    }

    return (
        <div className={'arrow-container'}>
            <div className={'icon-container'}>
                <FaAngleDoubleLeft size={30} color={'#37394e'} className={'arrows'}/>
                {dotRenderer()}
                <FaAngleDoubleRight size={30} color={'#37394e'} className={'arrows'}/>
            </div>
        </div>
    )
}

export default ArrowBar;
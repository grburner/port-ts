import React, { useContext } from 'react';
import './style.css';
import PortfoioContext from "../../utils/context";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

const ArrowBar: React.FC = () => {
    const context = useContext(PortfoioContext)

    const imageRearranger = (direction: string) => {
        let newArray: any = [...context.projectArrangement]
        console.log(newArray)
        if (direction === 'forward') {
            newArray.unshift(newArray.pop())
            return newArray
        } else if (direction === 'backward') {
            newArray.push(newArray.shift())
            return newArray
        }
    }

    const dotRenderer = () => {
        return (<div>
            {context.projectArrangement.map((project, index) => (
                <div className={'dot'}><GoPrimitiveDot /></div>
            ))}
            </div>);
    }

    return (
        <div className={'arrow-container'}>
            <div className={'icon-container'}>
                <FaAngleDoubleLeft size={30} color={'#37394e'} className={'arrows'} onClick={() => context.rearrange(imageRearranger('forward'))}/>
                {dotRenderer()}
                <FaAngleDoubleRight size={30} color={'#37394e'} className={'arrows'} onClick={() => context.rearrange(imageRearranger('backward'))}/>
            </div>
        </div>
    )
}

export default ArrowBar;
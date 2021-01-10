import React, { useContext, useState, useEffect } from 'react';
import './style.css';
import PortfoioContext from "../../utils/context";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

interface Props {
    onChange: (newValue: number) => void
}

const ArrowBar: React.FC<Props> = (props) => {
    const context = useContext(PortfoioContext)
    const [imagesInView, setImagesInView] = useState<number>(0)

    useEffect(() => {
        if (context.width < 700) {
            setImagesInView(1)
        } else if (context.width < 1300) {
            setImagesInView(2)
        } else {
            setImagesInView(3)
        }
    }, [context.width])

    const imageRearranger = (direction: string) => {
        let newArray: any = [...context.projectArrangement]
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
                <div className={(context.projectArrangement.slice(0,imagesInView)).includes(index)? 'dot active' : 'dot'}><GoPrimitiveDot /></div>
            ))}
            </div>);
    }

    return (
        <div className={'arrow-container'}>
            <div className={'icon-container'}>
                <FaAngleDoubleLeft size={30} color={'#37394e'} className={'arrows'} onClick={() => 
                    context.rearrange(imageRearranger('forward'))
                    }/>
                {dotRenderer()}
                <FaAngleDoubleRight size={30} color={'#37394e'} className={'arrows'} onClick={() => context.rearrange(imageRearranger('backward'))}/>
            </div>
        </div>
    )
}

export default ArrowBar;
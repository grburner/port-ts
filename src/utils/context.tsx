import React from 'react';

interface PortfolioContext {
    width: number,
    projectArrangement: number[],
    rearrange: (projectArrangement: number[]) => void,
}

const PortfolioContext = React.createContext({
    width: window.innerWidth,
    projectArrangement: [0,1,2,3],
    rearrange: (projectArrangement: number[]) => {},
});

export default PortfolioContext;
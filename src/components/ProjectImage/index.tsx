import React, { useState, useEffect } from 'react';
import './style.css';
import winehubImg from '../../assets/winePortfolio.png';
import worthHomePortfolio from '../../assets/worthHomePortfolio.png';
import litjoyPortfolio from '../../assets/litjoyPortfolio.png';
import nodeSortlyShipstation from '../../assets/nodeSortlyShipstation.png';

const ProjectImage: React.FC<{ image: number; active: string }> = (props) => {
  const [ classes, setClasses ] = useState<string>('still-img');
  const imgPick = (image: number) => {
    switch (image) {
      case 0:
        return worthHomePortfolio;
      case 1:
        return litjoyPortfolio;
      case 2:
        return winehubImg;
      case 3:
        return nodeSortlyShipstation;
      default:
        return litjoyPortfolio;
    }
  };

  return (
    <div>
      <img
        className={'still-img'}
        src={imgPick(props.image)}
        alt="wine hub"
      />
    </div>
  );
};

export default ProjectImage;

import React from 'react';

import { getCssValue } from '@utils';
import * as classes from './Colors.module.css';

const colors = [
  '--color-white',
  '--color-black',
  '--color-basic',
  '--color-accent',
  '--color-grey'
];

const Colors = () => {
  return (
    <div className={classes.container}>
      {colors.map((c, i) => {
        return (
          <div key={getCssValue(c) + i} className={classes.color}>
            <div className={classes.colorPalette} style={{ background: getCssValue(c) }}></div>
            <span>{getCssValue(c)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Colors;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PaintChip from './PaintChip';

// Styles
import './App.css';
import './styles/flex.css';
import './styles/margin.css';

// Colors
import tremcladRust from './chipColors/tremcladRust/colors';

function App() {
  const [count, setCount] = useState(0);

  const chipSize = {
    height: '50px',
    width: '50px',
  };

  const paintChips = tremcladRust.map(chip =>
    <div key={ chip.name } className="u-m4">
      <PaintChip name={ chip.name } color={ chip.rgb } size={ chipSize } />
      <div>
        <div>RGB: {chip.rgb.red} {chip.rgb.green} {chip.rgb.blue}</div>
        <div>CMYK: {chip.cmyk.cyan.toFixed(2)} {chip.cmyk.magenta.toFixed(2)} {chip.cmyk.yellow.toFixed(2)} {chip.cmyk.black.toFixed(2)}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className='u-flex u-flex-wrap'>
        { paintChips }
      </div>
    </>
  );
}

export default App

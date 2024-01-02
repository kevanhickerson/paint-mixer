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
  const [red, setRed] = useState(61);
  const [green, setGreen] = useState(77);
  const [blue, setBlue] = useState(139);

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
      <div className="u-ml4">
        Red: <input type="number" min="0" max="255" value={ red } onChange={ (e) => setRed(e.target.value) } />
        Green: <input type="number" min="0" max="255" value={ green } onChange={ (e) => setGreen(e.target.value) } />
        Blue: <input type="number" min="0" max="255" value={ blue } onChange={ (e) => setBlue(e.target.value) } />
      </div>
      <div className="u-ml4 u-mb12">
        Target Color
        <PaintChip
          name="Target Color"
          color={{
            red,
            green,
            blue
          }}
          size={ chipSize }
          />
      </div>
      <div>
        <div className="u-ml4">
          Available Colors
        </div>
        <div className='u-flex u-flex-wrap'>
          { paintChips }
        </div>
      </div>
    </>
  );
}

export default App

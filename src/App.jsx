import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PaintChip from './PaintChip';

// Styles
import './App.css';
import './styles/flex.css';
import './styles/margin.css';

// Colors
import tremcladRust from './chipColors/tremcladRust/colors';

// Helpers
import findClosest from './helpers/findClosest';
import mixPaint from './helpers/mixPaint';
import cmykToRgb from './helpers/cmykToRgb';
import rgbToCmyk from './helpers/rgbToCmyk';
import cmykDistance from './helpers/cmykDistance';

function App() {
  const [red, setRed] = useState(61);
  const [green, setGreen] = useState(77);
  const [blue, setBlue] = useState(139);

  const [mixed, setMixed] = useState(null);

  const targetCmyk = useMemo(() => rgbToCmyk({red, green, blue}), [red, green, blue]);

  const chipSize = {
    height: '50px',
    width: '50px',
  };

  const mixColor = () => {
    let availableColors = structuredClone(tremcladRust);

    const first = findClosest(rgbToCmyk({ red, green, blue}), rgbToCmyk({ red: 255, green: 255, blue: 255 }), availableColors);
    // Remove the color picked from the array of availableColors
    availableColors.splice(availableColors.indexOf(first), 1);

    const second = findClosest(rgbToCmyk({ red, green, blue}), first.cmyk, availableColors);
    // Remove the color picked from the array of availableColors
    availableColors.splice(availableColors.indexOf(second), 1);

    const firstMixedPaint = mixPaint(
      [
        {
          times: 1,
          paint: first,
        },
        {
          times: 1,
          paint: second,
        }
      ],
      {cmyk: targetCmyk}
    );

//     const third = findClosest(rgbToCmyk({ red, green, blue}), first.cmyk, availableColors);
//
//     const secondMixedPaint = mixPaint([{cmyk: firstMixedPaint}, third]);

    setMixed({
      name: 'Mixed Color',
      rgb: cmykToRgb(firstMixedPaint),
      cmyk: firstMixedPaint,
    });
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
        <button onClick={() => {mixColor()}}>Mix</button>
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
          <div>CMYK: {targetCmyk.cyan.toFixed(2)} {targetCmyk.magenta.toFixed(2)} {targetCmyk.yellow.toFixed(2)} {targetCmyk.black.toFixed(2)}</div>
      </div>
      { mixed &&
        <div className="u-ml4 u-mb12">
          Mixed Color
          <PaintChip name={ mixed.name } color={ mixed.rgb } size={ chipSize } />
          <div>CMYK: {mixed.cmyk.cyan.toFixed(2)} {mixed.cmyk.magenta.toFixed(2)} {mixed.cmyk.yellow.toFixed(2)} {mixed.cmyk.black.toFixed(2)}</div>
          <div>Distance: {cmykDistance(targetCmyk, mixed.cmyk)}</div>
        </div>
      }
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

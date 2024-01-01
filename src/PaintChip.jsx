import './styles/border.css';

export default function PaintChip({color, name, size}) {
  const style = {
    backgroundColor: `rgb(${color.red} ${color.green} ${color.blue})`,
    width: `${size.width}`,
    height: `${size.height}`,
  }

  return (
    <div className='u-border' title={ name } style={ style }></div>
  )
}
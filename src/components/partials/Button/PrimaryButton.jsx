//Style
import './PrimaryButton.css'

const PrimaryButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="primarybutton">{text}</button>
  )
};

export default PrimaryButton;
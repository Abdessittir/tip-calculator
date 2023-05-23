import styles from '../styles/TipButton.module.css';


const TipButton = (
  { percentage, setTip, seleted }
  : { percentage: number, setTip: any, seleted: number }
) => {
  return (
    <button
      className={seleted !== percentage ? styles.tip_button: styles.selected_button}
      onClick={() => setTip(percentage)}
    >
      {percentage}%
    </button>
  );
};

export default TipButton;
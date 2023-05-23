import styles from '../styles/TipButton.module.css';


const TipButton = ({ percentage, setTip }: { percentage: number, setTip: any }) => {
  return (
    <button
      className={styles.tip_button}
      onClick={() => setTip(percentage)}
    >
      {percentage}%
    </button>
  );
};

export default TipButton;
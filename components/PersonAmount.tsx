import styles from '../styles/PersonAmount.module.css';

const PersonAmount = (
  { amountType, amount }
  :{ amountType: string, amount: number }
) => {
  return (
    <div className={styles.result_card}>
      <div>
        <p className={styles.amount_type}>{amountType}</p>
        <p className={styles.amount}>/ person</p>
      </div>
      <h2>{'$'}{amount.toFixed(2)}</h2>
    </div>
  );
};

export default PersonAmount;
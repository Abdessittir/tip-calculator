const PersonAmount = (
  { amountType, amount }
  :{ amountType: string, amount: number }
) => {
  return (
    <div>
      <div>
        <p>{amountType}</p>
        <p>/ person</p>
      </div>
      <h2>{'$'}{amount.toFixed(2)}</h2>
    </div>
  );
};

export default PersonAmount;
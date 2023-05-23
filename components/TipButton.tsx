const TipButton = ({ percentage, setTip }: { percentage: number, setTip: any }) => {
    return (
        <button onClick={() =>setTip(percentage)}>{percentage}</button>
    );
};

export default TipButton;
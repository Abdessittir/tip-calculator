import { Ref, useRef } from 'react';

import styles from '../styles/CustomTip.module.css';

type LegacyRef<T> = Ref<T>;

const CustomTip = ({ setTip }: {  setTip: any }) => {

  const customRef = useRef() as LegacyRef<HTMLButtonElement>;
  const inputRef = useRef() as LegacyRef<HTMLInputElement>;
  const handleCustom = () => {
    customRef!.current.style.display = 'none';
    inputRef!.current.style.display = 'block';
  };

  return (
    <>
      <button ref={customRef} onClick={handleCustom} className={styles.custom}>
        Custom
      </button>
      <input
        ref={inputRef}
        className={styles.input}
        type="number"
        placeholder="0"
        onChange={() => setTip(inputRef!.current.value)}
      />
    </>
  );
};
export default CustomTip;

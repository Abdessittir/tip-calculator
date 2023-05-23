import { Ref, useRef } from 'react';

import styles from '../styles/CustomTip.module.css';

interface RefType {
  current: {
    style: {
      display: string
    },
    value: string,
  }
}

type LegacyRef<T> = Ref<HTMLInputElement>;
type LegacyRef2<T> = Ref<HTMLButtonElement>;

const CustomTip = ({ setTip }: {  setTip: any }) => {

  const customRef = useRef() as RefType;
  const inputRef = useRef() as RefType;
  const handleCustom = () => {
    customRef!.current.style.display = 'none';
    inputRef!.current.style.display = 'block';
  };

  return (
    <>
      <button
        ref={customRef as unknown as LegacyRef2<HTMLButtonElement>}
        onClick={handleCustom}
        className={styles.custom}
      >
        Custom
      </button>
      <input
        ref={inputRef as unknown as LegacyRef<HTMLInputElement>}
        className={styles.input}
        type="number"
        placeholder="0"
        onChange={() => setTip(inputRef!.current.value)}
      />
    </>
  );
};
export default CustomTip;

import Image from 'next/image';
import { Ref, useEffect, useRef, useState } from 'react';

import styles from '../styles/Input.module.css';

interface Options {
  type: string,
  label: string,
  iconUrl: string,
};

interface RefType {
  current: {
    value: undefined
  }
}

interface EventType {
  target: {
    value: string
  }
}

type LegacyRef<T> = Ref<HTMLInputElement>;

const Input = (
  {options, changeState}: {options: Options, changeState: any}
) => {

  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef() as RefType;
  const handleChange = (event: EventType) => {
    const value = parseFloat(event.target.value);
    const field = options.label === 'Bill'? 'bill': 'numberOfPeaple';

    if(value <= 0) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    changeState(field, value);
  };

  useEffect(() => {
    const clearinputs = () => {
      inputRef!.current!.value = undefined;
    };
    window.addEventListener('clear_inputs', clearinputs);

    return () => {
      window.removeEventListener('clear_inputs', clearinputs);
    }
  }, []);

  return (
    <div className={styles.input_container}>
      <label htmlFor={options.label}>{options.label}</label>
      {invalid && <p className={styles.invalid}>Can&apos;t be zero or less</p>}
      <Image
        className={styles.icon}
        src={options.iconUrl}
        width="13"
        height="16"
        alt={options.label}
      />
      <input
      className={invalid ? styles.invalid_input: styles.valid_input}
        ref={inputRef as unknown as LegacyRef<HTMLInputElement>}
        type={options.type}
        placeholder="0"
        name={options.label}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
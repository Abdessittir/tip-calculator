import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface Options {
  type: string,
  label: string,
  iconUrl: string,
};

const Input = (
  {options, changeState}: {options: Options, changeState: any}
) => {

  const [invalid, setInvalid] = useState(false);
  const handleChange = (event: ChangeEvent) => {
    const value = parseFloat(event.target.value);
    const field = options.label === 'Bill'? 'bill': 'numberOfPeaple';

    if(value === 0) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    changeState(field, value);
  };

  return (
    <div>
      <label htmlFor={options.label}>{options.label}</label>
      {invalid && <p>Can't be zero</p>}
      <Image
        src={options.iconUrl}
        width="20"
        height="20"
        alt={options.label}
      />
      <input
        type={options.type}
        placeholder="0"
        name={options.label}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
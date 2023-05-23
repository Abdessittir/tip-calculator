import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from '@/styles/Home.module.css';

import Input from '@/components/Input'
import PersonAmount from '@/components/PersonAmount';
import TipButton from '@/components/TipButton';

export default function Home() {
  const [state, setState] = useState({
    bill: 0,
    numberOfPeaple: 0,
    selectedTip: 0,
    tipAmount: 0,
    total: 0,
  });

  const availableTips: number[] = [5, 10, 15, 25, 50];

  const handleChange = (field: string, value: number) => {
    setState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (state.bill && state.numberOfPeaple && state.selectedTip) {
      setState((prev) => ({
        ...prev,
        tipAmount: prev.bill * prev.selectedTip / 100 / prev.numberOfPeaple,
        total: ((prev.bill * prev.selectedTip / 100) + prev.bill) / prev.numberOfPeaple
      }));
    } else {
      setState((prev) => ({
        ...prev,
        tipAmount: 0,
        total: 0,
      }));
    }
  }, [state.bill, state.numberOfPeaple, state.selectedTip]);

  return (
    <>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Tip Calculator app create by Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="./logo.svg"
          width="87"
          height="54"
          alt="logo"
        />
        <div className={styles.container}>
          <section className={styles.input_container}>
            <Input
              options={{
                type: 'number',
                label: 'Bill',
                iconUrl: './icon-dollar.svg',
              }}
              changeState={handleChange}
            />
            <p style={{ color: 'hsl(184, 14%, 56%)' }}>Select Tip %</p>
            <div className={styles.tips_container}>
              {
                availableTips.map((tip) => (
                  <TipButton
                    key={tip}
                    percentage={tip}
                    setTip={
                      (value: number) => setState((prev) => ({ ...prev, selectedTip: value }))
                    }
                  />
                ))
              }
              <button>Custom</button>
            </div>

            <Input
              options={{
                type: 'number',
                label: 'Number of Peaple',
                iconUrl: './icon-person.svg',
              }}
              changeState={handleChange}
            />
          </section>
          <section className={styles.results_container}>
            <PersonAmount amountType="Tip Amount" amount={state.tipAmount} />
            <PersonAmount amountType="Total" amount={state.total} />
            <button className={styles.reset_button}>RESET</button>
          </section>
        </div>
      </main>
    </>
  )
}

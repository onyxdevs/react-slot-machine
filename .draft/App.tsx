import React, { useEffect, useState } from 'react';

const initialSymbols = ['strawberry', 'banana', 'orange', 'monkey'];
const getRandom = () => Math.floor(Math.random() * initialSymbols.length);
const getRandoms = () => [getRandom(), getRandom(), getRandom()];

const App: React.FC = () => {
    console.log('[App.tsx]');

    // // const [timer, setTimer] = useState(0);
    const [wheels, setWheels] = useState(getRandoms());

    // const randoms = getRandoms();

    const currentSymbols = wheels.map((wheel: number) => initialSymbols[wheel]);

    // useEffect(() => {
    //     setWheels(getRandoms());
    //     console.log('randoms', randoms);
    //     console.log('currentSymbols', currentSymbols);
    // }, [randoms, currentSymbols]);
    useEffect(() => {
        const spinInterval = setInterval(() => {
            // console.log('getRandom', initialSymbols[getRandom()]);
            setWheels(getRandoms());
        }, 3000);

        // setTimeout(() => {
        // clearInterval(spinInterval);
        // }, 3000);

        return () => {
            // clearInterval(spinInterval);
        };
    }, []);

    // console.log('currentSymbols', currentSymbols);

    return (
        <div className='App'>
            {currentSymbols.map((s, i) => (
                <h1 key={i}>{s}</h1>
            ))}
        </div>
    );
};

export default App;

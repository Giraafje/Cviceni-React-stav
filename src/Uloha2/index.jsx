import React, { useState } from 'react'

// Zadání 1: Převeď `cislo` na stavovou proměnnou.
// Zadání 2: Nastav, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku, vynulovat nastavovalo na nulu apod.

const Pocitadlo = () => {
	const [cislo, setCislo] = useState(0)

	const handleSetCountMinusFive = () => {
		setCislo(cislo - 5)
	}

	const handleSetCountMinusOne = () => {
		setCislo(cislo - 1)
	}

	const handleSetCountZero = () => {
		setCislo(0)
	}

	const handleSetCountPlusOne = () => {
		setCislo(cislo + 1)
	}

	const handleSetCountPlusFive = () => {
		setCislo(cislo + 5)
	}

	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button onClick={handleSetCountMinusFive}>-5</button>
			<button onClick={handleSetCountMinusOne}>-1</button>
			<button onClick={handleSetCountZero}>vynulovat</button>
			<button onClick={handleSetCountPlusOne}>+1</button>
			<button onClick={handleSetCountPlusFive}>+5</button>
		</>
	)
}

export const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}

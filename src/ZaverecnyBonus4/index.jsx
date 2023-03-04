import React, {useState} from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
	const [firstNumber, setFirstNumber] = useState(0)
	const [secondNumber, setSecondNumber] = useState(0)

	const handleChangeFirstNumber = (e) => {
		setFirstNumber(e.target.value)
	}

	const handleChangeSecondNumber = (e) => {
		setSecondNumber(e.target.value)
	}

	return (
		<>
			<input type="number" defaultValue="0" onChange={handleChangeFirstNumber}/> +
			<input type="number" defaultValue="0" onChange={handleChangeSecondNumber}/> = <output>{parseInt(firstNumber) + parseInt(secondNumber)}</output>
		</>
	)
}

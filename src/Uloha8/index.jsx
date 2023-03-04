import React, {useState} from 'react'

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
	const [probability, setProbability] = useState("možná")

	const handleClick = () => {
		if (probability === "možná") {
			setProbability("ano")
		} else if (probability === "ano") {
			setProbability("ne")
		} else {
			setProbability("možná")
		}
	}
	return (
		<>
			<h3>Prší v Brně: {probability}</h3>
			<button onClick={handleClick}>změnit</button>
		</>
	)
}

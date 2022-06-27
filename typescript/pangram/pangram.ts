export function isPangram(phrase: string): boolean {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

	let seen: {[x: string]: number} = {}
	alphabet.forEach((l) => {
		seen[l] = 0
	})

	let letters = phrase.toLowerCase().replace(/[^a-z]/gi, '')

	letters.split("").forEach(letter => {
		seen[letter]++
	})

	return Object.values(seen).every(v => v > 0)
}

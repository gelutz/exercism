const orbitalPeriods: {[x: string]: number} = {
	'mercury': 0.2408467,
	'venus': 0.61519726,
	'earth': 1,
	'mars': 1.8808158,
	'jupiter': 11.862615,
	'saturn': 29.447498,
	'uranus': 84.016846,
	'neptune': 164.79132
}

const secondsToEartYear = (seconds: number) => (seconds / 31557600)

export const age = (planet: string, seconds: number): number => {
	const earthAge = secondsToEartYear(seconds)

	if (!Object.keys(orbitalPeriods).includes(planet)) {
		throw Error('Planet not found.')
	}

	return +(earthAge / orbitalPeriods[planet]).toFixed(2)
}









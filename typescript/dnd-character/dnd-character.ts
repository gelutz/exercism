const rollDice = () => {
	return [1, 2, 3, 4, 5, 6].reduce((prev, current) => {
		return (Math.random() > 0.5) ? current : prev
	})
}

export class DnDCharacter {
	public hitpoints	= 0
	public strength 	= 0
	public dexterity	= 0
	public constitution = 0
	public intelligence = 0
	public wisdom		= 0
	public charisma 	= 0

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore()
		this.dexterity = DnDCharacter.generateAbilityScore()
		this.constitution = DnDCharacter.generateAbilityScore()
		this.intelligence = DnDCharacter.generateAbilityScore()
		this.wisdom = DnDCharacter.generateAbilityScore()
		this.charisma = DnDCharacter.generateAbilityScore()

		this.hitpoints = DnDCharacter.getModifierFor(this.constitution)
	}

	public static generateAbilityScore(): number {
		let results = []
		for (let index = 0; index < 4; index++) {
			results.push(rollDice())
		}

		return results.sort().slice(1, -1)
			.reduce((prev, current) => prev + current)
	}

	public static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2)
	}
}

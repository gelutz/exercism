export const toRna = (dna: string): string => {
	const mapping: {[x: string]: string} = {
		'G':'C',
		'C':'G',
		'T':'A',
		'A':'U',
	};

	let rna: string[] = []
	dna.split("").forEach((bit, index) => {
		if (!Object.keys(mapping).includes(bit)) {
			throw Error('Invalid input DNA.')
		}

		rna.push(mapping[bit])
	})

	return rna.join("")
}

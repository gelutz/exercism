
const convertToBinary = (n: number) => +n.toString(2)

const binaryToEvents = (n: number): string[] => {
	// 1 = wink
	// 10 = double blink
	// 100 = close your eyes
	// 1000 = jump
	// 10000 = Reverse the order of the operations in the secret handshake.
	let eventsList = ["wink", "double blink", "close your eyes", "jump"]

	let bits = n.toString().split("")
	let events: string[] = []

	if (bits.length >= 5) {
		bits.shift()
	}

	bits.reverse()

	bits.forEach((bit, index) => {
		if (bit == "1") {
			events.push(eventsList[index])
		}
	})

	if (n.toString().length >= 5) {
		events = events.reverse()
	}

	return events

}
export const commands = (input: number): string[] => {

	const bin = convertToBinary(input)
	const handshake = binaryToEvents(bin)

    return handshake
}

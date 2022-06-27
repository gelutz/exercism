var convertToBinary = function (n) { return +n.toString(2); };
var binaryToEvents = function (n) {
	// 1 = wink
	// 10 = double blink
	// 100 = close your eyes
	// 1000 = jump
	// 10000 = Reverse the order of the operations in the secret handshake.
	var eventsList = ["wink", "double blink", "close your eyes", "jump"];
	var bits = n.toString().split("");
	var events = [];
	if (bits.length >= 5) {
		bits.shift();
	}

	bits.reverse()

	bits.forEach(function (bit, index) {
		if (bit == "1") {
			events.push(eventsList[index]);
		}
	});
	if (n.toString().length >= 5) {
		events = events.reverse();
	}
	return events;
};
var commands = function (input) {
	var bin = convertToBinary(input);
	var handshake = binaryToEvents(bin);
	return handshake;
};

const test = (n) => binaryToEvents(convertToBinary(n))
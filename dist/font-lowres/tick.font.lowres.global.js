/* eslint-disable */

/*
 * tick v1.7.5 - Counters Made Easy
 * Copyright (c) 2020 PQINA - http://pqina.nl/tick/
 */
(function(root, undefined) {
	'use strict';

	// only create tick extensions queue if not already available
	if (!root.Tick) {
		root.Tick = [];
	}

	// add this extension
	root.Tick.push(['font', 'lowres', (function() {
	if (!module) {
		var module = {};
	}
'use strict';

module.exports = function () {
	return {

		// Special Characters
		' ': [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
		'?': [[1, 1, 1], [0, 0, 1], [0, 1, 0], [0, 0, 0], [0, 1, 0]],
		'!': [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0]],
		'-': [[0, 0, 0], [0, 0, 0], [1, 1, 1], [0, 0, 0], [0, 0, 0]],
		'+': [[0, 0, 0], [0, 1, 0], [1, 1, 1], [0, 1, 0], [0, 0, 0]],
		'.': [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0]],
		',': [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]],
		'%': [[1, 0, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 0, 1]],
		'$': [[0, 1, 1], [1, 1, 0], [0, 1, 0], [0, 1, 1], [1, 1, 0]],
		'€': [[0, 1, 1], [1, 0, 0], [1, 1, 1], [1, 1, 0], [0, 1, 1]],
		'&': [[0, 1, 0], [1, 0, 1], [0, 1, 0], [1, 0, 1], [0, 1, 1]],
		'@': [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 0], [1, 1, 1]],
		':': [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]],
		';': [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]],

		// Numeric
		'0': [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]],
		'1': [[0, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
		'2': [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]],
		'3': [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
		'4': [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]],
		'5': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
		'6': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
		'7': [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]],
		'8': [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
		'9': [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],

		// Alphabetic
		'A': [[0, 1, 0], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
		'B': [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 1, 0]],
		'C': [[0, 1, 1], [1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 1, 1]],
		'D': [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]],
		'E': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 0], [1, 1, 1]],
		'F': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 0], [1, 0, 0]],
		'G': [[0, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [0, 1, 1]],
		'H': [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
		'I': [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
		'J': [[0, 0, 1], [0, 0, 1], [0, 0, 1], [1, 0, 1], [0, 1, 0]],
		'K': [[1, 0, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]],
		'L': [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]],
		'M': [[1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]],
		'N': [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]],
		'O': [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
		'P': [[1, 1, 0], [1, 0, 1], [1, 1, 1], [1, 0, 0], [1, 0, 0]],
		'Q': [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]],
		'R': [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]],
		'S': [[0, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0]],
		'T': [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
		'U': [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]],
		'V': [[1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0], [0, 1, 0]],
		'W': [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1]],
		'X': [[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1], [1, 0, 1]],
		'Y': [[1, 0, 1], [1, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
		'Z': [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
	};
};

	module.exports.identifier = {
		name:'lowres',
		type:'font'
	};
    return module.exports;
}())]);

}(window));
function sortStringLength(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i].length > arr[j].length) {
				var dup= arr[i];
				arr[i] = arr[j];
				arr[j] = dup;
			}
		}
	}
	return arr;
}
console.log(sortStringLength(['hello', 'hi', 'bye'])); //["hi","bye","hello"]


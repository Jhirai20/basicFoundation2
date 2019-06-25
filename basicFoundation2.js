//1)Biggie Size
function makeItBig(arr) {
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]>0) {
			arr[i]='big'
		} 
	}
	return arr;
}
console.log(makeItBig([-1,3,5,-5]) );

// 2)Print Low, Return High
function PrintLowReturnhigh(arr) {
	var min=arr[0], max=arr[0];
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]>max) {
			max=arr[i];
		} 
		if (arr[i]<min) {
			min=arr[i];
		}
	}
	console.log(min);
	return max;
}
console.log(PrintLowReturnhigh([-1,3,5,-5]) );

// 3)Print One, Return Another
function printReturn(arr) {
	console.log(arr[arr.length-2]);
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]%2!==0) {
			return arr[i]
		} 
	}
	
}
console.log(printReturn([-1,3,5,-5]) );

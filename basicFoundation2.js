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

// 4)Double Vision
function double(arr) {
	var arrnew=[];
	for (var i = 0; i <arr.length; i++) {
		arrnew.push(arr[i]*2); 
	}
	return arrnew
}
console.log(double([-1,3,5,-5]) );

// 5)Count Positives 
function countPos(arr) {
	var count=0
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]>0) {
			count++
		}
	}
	arr[arr.length-1]=count;
	return arr
}
console.log(countPos([-1,3,5,-5]) );

// 6)Evens and Odds
function EvenOdds(arr) {
	var odd=0, even=0
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]%2!==0) {
			odd++
			if (odd==3) {
				console.log("thats odd!");
			}
		}
		else{
			even++
			if (even==3) {
				console.log("Even more so!");
			}
		}
	}
	
}
console.log(EvenOdds([-1,3,5,4,2,6]) );

// 7)Increment the Seconds 
function increOdd(arr) {
	var odd=0;
	for (var i = 0; i <arr.length; i++) {
		if (i%2!==0) {
			arr[i]+=1
		}
	}
	return arr
}
console.log(increOdd([-1,3,5,4,2,6]) );

// 8)Previous Lengths 
function PreviousLength(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var str=arr[i-1];
		arr[i]=str.length;
	}
	return arr
}
console.log(PreviousLength(["hello", "dojo", "awesome"]) );

// 9)Add Seven
function addSeven(arr) {
	var arrnew=[];
	for (var i = 0; i < arr.length; i++) {
		arrnew.push(arr[i]+7);
	}
	return arrnew
}
console.log(addSeven([2,4,6,1,3]) );

// 10)Reverse Array
function ReverseArr(arr) {
	for (var i = 0; i <=arr.length/2; i++) {
		var temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
		
	}
	return arr;
}
console.log(ReverseArr([2,4,6,1,3]) );

// 11)Outlook: Negative
function NegativeOutlook(arr) {
	var arrnew=[];
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]<0) {
			arrnew.push(arr[i]*-1);
		}
		else{
			arrnew.push(arr[i]);
		}
	}
	return arrnew;
}
console.log(NegativeOutlook([2,-4,-6,1,3]) );

// 12)Always Hungry
function alwaysHungry(arr) {
	var count=0;
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]=='food') {
			console.log('yummy');
			count++;
		}
	}
	if (count==0) {
		console.log("I'm hungry");
	}
}
console.log(alwaysHungry([2,-6,1,3]) );

// 13)Swap Toward the Center
function CenterSwap(arr) {
	for (var i = 0; i <=arr.length/2; i++) {
		var temp=arr[i];
		arr[i]= arr[arr.length-1-i]
		arr[arr.length-1-i]=temp;
	}
	return arr;
}
console.log(CenterSwap([2,-6,0,1,3]) );

// 14)Scale the Array 
function scaleArr(arr,num) {
	for (var i = 0; i <arr.length; i++) {
		arr[i]=arr[i]*num
	}
	return arr;
}
console.log(scaleArr([1,2,3],3));
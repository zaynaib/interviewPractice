function fizzbuzz(){
	var count =1;
	//loop 100 times
	//print numbers 1 to 100
	while(count <101){
		//check to see if it is divisble by both
		//if its divisible by both
		if(count%3 ===0 && count%5 ===0){
			console.log("Fizzbuzz");

		}
		else if(count%3 ===0){
			//print fizz
			console.log("Fizz");
		}
		else if(count%5 ===0){
			//print buzz
			console.log("Buzz");
		}
		else{
			//print number count
			console.log(count);
		}

		count++;
		
	}
	
}

fizzbuzz();
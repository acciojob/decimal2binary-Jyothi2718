function decimalToBinary(num){

	 if(num===0) return '0';
      let binary = ' ';
	
		 while(num>0){ //7>0; 3>0;1>0
			binary = (num%2) + binary; // 1+'' =1 +1 = 11+1=111
			 num = math.floor(num/2); //3; 1
			 
		 }
		return binary; 
}
console.log(decimalToBinary);
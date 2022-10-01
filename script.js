

	var i = 0;
	var cash=0;
	var guaranteed=0;
	var operators = ['+', '-', '*', '/'];
	
	function Q1(){
		num1=document.getElementById("num1");
		num2=document.getElementById("num2");
		op=document.getElementById("operator");
		rnum1 = Math.floor((Math.random()*10)+1);
		rnum2 = Math.floor((Math.random()*10)+1);
		rop = operators[Math.floor(Math.random()*4)]
		num1.innerHTML=rnum1;
		num2.innerHTML=rnum2;
		op.innerHTML=rop;   
		correct = eval(rnum1+rop+rnum2);

		var randomValues= [];
		var correctValue = correct;
		randomValues.push(correctValue);
		var currentValue;
		while(randomValues.length <4){
			currentValue = Math.floor(Math.random()*10)+correct;

		if(randomValues.indexOf(currentValue)<0) {
			randomValues.push(currentValue);
			}
		console.log(randomValues);

		var currentIndex=randomValues.length, randomIndex, temporaryValue;

		while(0 !== currentIndex){
			randomIndex = Math.floor(Math.random()*currentIndex);
			currentIndex -=1;

			temporaryValue = randomValues[currentIndex];
    		randomValues[currentIndex] = randomValues[randomIndex];
    		randomValues[randomIndex] = temporaryValue;
		}

		document.getElementById("a").value=randomValues[0];
		document.getElementById("b").value=randomValues[1];
		document.getElementById("c").value=randomValues[2];
		document.getElementById("d").value=randomValues[3];

		}}



	/*function Q2(){
		num1=document.getElementById("num1");
		num2=document.getElementById("num2");
		op=document.getElementById("operator");
		rnum1 = Math.floor((Math.random()*100)+1);
		rnum2 = Math.floor((Math.random()*100)+1);
		rop = operators[Math.floor(Math.random()*4)]
		num1.innerHTML=rnum1;
		num2.innerHTML=rnum2;
		op.innerHTML=rop;   
		correct = eval(rnum1+rop+rnum2);

		var randomValues= [];
		var correctValue = correct;
		randomValues.push(correctValue);
		var currentValue;
		while(randomValues.length <4){
			currentValue = Math.floor(Math.random()*30)+correct;

		if(randomValues.indexOf(currentValue)<0) {
			randomValues.push(currentValue);
			}
		console.log(randomValues);

		var currentIndex=randomValues.length, randomIndex, temporaryValue;

		while(0 !== currentIndex){
			randomIndex = Math.floor(Math.random()*currentIndex);
			currentIndex -=1;

			temporaryValue = randomValues[currentIndex];
    		randomValues[currentIndex] = randomValues[randomIndex];
    		randomValues[randomIndex] = temporaryValue;
		}

		document.getElementById("a").value=randomValues[0];
		document.getElementById("b").value=randomValues[1];
		document.getElementById("c").value=randomValues[2];
		document.getElementById("d").value=randomValues[3];

		}}



	function Q3(){
		num1=document.getElementById("num1");
		num2=document.getElementById("num2");
		op=document.getElementById("operator");
		rnum1 = Math.floor((Math.random()*1000)+1);
		rnum2 = Math.floor((Math.random()*1000)+1);
		rop = operators[Math.floor(Math.random()*4)]
		num1.innerHTML=rnum1;
		num2.innerHTML=rnum2;
		op.innerHTML=rop;   
		correct = eval(rnum1+rop+rnum2);

		var randomValues= [];
		var correctValue = correct;
		randomValues.push(correctValue);
		var currentValue;
		while(randomValues.length <4){
			currentValue = Math.floor(Math.random()*70)+correct;

		if(randomValues.indexOf(currentValue)<0) {
			randomValues.push(currentValue);
			}
		console.log(randomValues);

		var currentIndex=randomValues.length, randomIndex, temporaryValue;

		while(0 !== currentIndex){
			randomIndex = Math.floor(Math.random()*currentIndex);
			currentIndex -=1;

			temporaryValue = randomValues[currentIndex];
    		randomValues[currentIndex] = randomValues[randomIndex];
    		randomValues[randomIndex] = temporaryValue;
		}

		document.getElementById("a").value=randomValues[0];
		document.getElementById("b").value=randomValues[1];
		document.getElementById("c").value=randomValues[2];
		document.getElementById("d").value=randomValues[3];

		}}

		*/

				$("input.btn").on("click", function() {
		    var selectedValue = parseInt($(this).val(), 10);

		    if(selectedValue === correct) {
		      alert("Tačan odgovor!");
		      i++;
		      console.log(i)
		      Q1();
		    } else {
		      alert("Pogrešan odgovor!");
		    }
		 });



		



/*
	if (i=0){cash=0; quaranteed=0};
	if (i=1){cash=100; quaranteed=0};
	if (i=2){cash=250; quaranteed=0};
	if (i=3){cash=500; quaranteed=0};
	if (i=4){cash=750; quaranteed=0};
	if (i=5){cash=1000; quaranteed=1000;};
	if (i=6){cash=2000; quaranteed=1000};
	if (i=7){cash=4000; quaranteed=1000};
	if (i=8){cash=8000; quaranteed=1000};
	if (i=9){cash=16000; quaranteed=1000};
	if (i=10){cash=32000; quaranteed=32000;};
	if (i=11){cash=75000; quaranteed=32000;};
	if (i=12){cash=125000; quaranteed=32000;};
	if (i=13){cash=250000; quaranteed=32000;};
	if (i=14){cash=500000; quaranteed=32000;};
	if (i=15){cash=1000000; quaranteed=1000000};
	*/

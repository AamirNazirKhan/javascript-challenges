//**Challenge # 01**

/* 
Ali and Ahmed are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter). Write a program in JS to ease their decision.
*/

var aliMass; var aliHeight; var ahmedMass; var ahmedHeight; var aliBMI; var ahmedBMI;
aliMass = prompt('What is Ali\'s Mass (kg)?' );
aliHeight = prompt('What is Ali\'s Height (m)?' );
ahmedMass = prompt('What is Ahmed\'s Mass (kg)?' );
ahmedHeight = prompt('What is Ahmed\'s Height (m)?' );

aliBMI = aliMass / (aliHeight * aliHeight);
ahmedBMI = ahmedMass / (ahmedHeight * ahmedHeight);

var aliBiggerBMI   = aliBMI > ahmedBMI;

console.log(aliBMI, ahmedBMI);

if(aliBMI > ahmedBMI){
  console.log('Ali\'s BMI is higher than Ahmed\'s');
}
else {
  console.log('Ahmed\'s BMI is higher than Ali\'s');
}

//**Challenge # 02**

/*
Ali and Ahmed both play basketball in different teams. In the latest 3 games, Ali's team scored 89, 120 and 103 points, while Ahmed's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. Now, Ayesha also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
*/

var teamAliAvg =  (89 + 120 + 103) / 3;
var teamAhmedAvg =  (116 + 94 + 123) / 3;
var teamAyeshaAvg =  (97 + 134 + 105) / 3;
console.log('Ali\'s team Average: ' + teamAliAvg + ' \n'  +
'Ahmed\'s team Average: ' + teamAhmedAvg + ' \n' +
'Ayesha\'s team Average: ' + teamAyeshaAvg
);

if (teamAliAvg > teamAhmedAvg  && teamAliAvg > teamAyeshaAvg) {   console.log('Ali\'s team is the winner'); }
else if (teamAhmedAvg > teamAliAvg && teamAhmedAvg > teamAyeshaAvg) { console.log('Ahmed\'s team is the winner'); }
else if ( teamAyeshaAvg > teamAliAvg &&  teamAyeshaAvg > teamAhmedAvg) { console.log('Ayesha\'s team is the winner'); }
else if (teamAliAvg === teamAhmedAvg  && teamAliAvg > teamAyeshaAvg) {   console.log('Ali\'s team and Ahmed\'s team  are tied for winning'); }
else if (teamAliAvg === teamAyeshaAvg && teamAliAvg > teamAhmedAvg ) {   console.log('Ali\'s team and Ayesha\'s team  are tied for winning'); }
else if (teamAhmedAvg === teamAyeshaAvg && teamAyeshaAvg > teamAliAvg ) {   console.log('Ahmed\'s team and Ayesha\'s team  are tied for winning'); }
else { console.log('They are all tied for winning \n\n'); }

console.log('Ali\'s Team Score: ' + teamAliAvg + '\n' +
'Ahmed\'s Team Score: ' + teamAhmedAvg + '\n' +
'Ayesha\'s Team Score: ' + teamAyeshaAvg
);

//**Challenge # 03**

/*
Ali and his family went on a holiday and went to 3 different restaurants. The bills were Rs 1020, Rs 480 and Rs 2660.
To tip the waiter a fair amount, Ali created a simple tip calculator (use function). He likes to tip 20% of the bill when the bill is less than Rs 500, 15% when the bill is between Rs 500 and Rs 2000, and 10% if the bill is more than Rs 2000.
In the end, Ali would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

var billsBeforeTip = [1020, 480, 2660]; var tipAmounts = []; var finalAmounts = []; 

function tipCalculator(billAmt)
{
  var percentage;
  if ( billAmt <= 500) {
      percentage = .2;  }
  else if (500 < billAmt <= 2000) {
          percentage = .15;
    }
  else {
          percentage = .1;
    }
    return percentage *  billAmt
  }

for (i = 0; i< billsBeforeTip.length; i++)
{
  tipAmounts[i] = tipCalculator(billsBeforeTip[i]);
  finalAmounts[i] = billsBeforeTip[i] + tipAmounts[i];
  console.log([i] + '. total tip: ' + tipAmounts[i]);
}

console.log('\n\nBills before tips: ' + billsBeforeTip.toString());
console.log('Final Amounts: ' + finalAmounts.toString());

//**Challenge # 04**

/*
Do you remember the first coding challenge where Ali and Ahmed compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
*/

var ali = {
  name: 'Ali',
  mass: '65',
  height: '1.72',
  calcBMI: function(){
    this.bmi = this.mass / Math.pow(this.height,2);
  }
}

ali.calcBMI();
console.log(ali);

var ahmed = {
  name: 'Ahmed',
  mass: '68',
  height: '1.73',
  calcBMI: function(){
    this.bmi = this.mass / Math.pow(this.height,2);
  }
}

ahmed.calcBMI();
console.log(ahmed);

if(ali.bmi > ahmed.bmi){
  console.log(ali.name + ' has a higher BMI');
}
else  if (ali.bmi < ahmed.bmi){
  console.log(ahmed.name + ' has a higher BMI');
} else {
  console.log(ali.name + ' and ' + ahmed.name + ' has the same BMI');
}

//**Challenge # 05**

/*
Remember the tip calculator challenge? Let's create a more advanced version!

This time, Ali and his family went to 5 different restaurants. The bills were Rs 1020, Rs 480, Rs 2660, Rs 3480, and Rs 1230.
Like before, Ali likes to tip 20% of the bill when the bill is less than Rs 500, 15% when the bill is between Rs 500 and Rs 2000, and 10% if the bill is more than Rs 2000.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

var  ali = {
     fullName: 'Ali',
     bills: [1020, 480, 2660, 3480, 1230],
     calcTips: function(){
       this.tipAmounts = []; this.finalAmounts = [];
       for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 500) {
              percentage = .2;
            }
            else if (500 <= bill <= 2000 ) {
              percentage = .15;
            }
            else {
              percentage = .1;
            }
            this.tipAmounts[i] = bill * percentage;
            this.finalAmounts[i] = bill + (bill * percentage);
       }
     }
}
ali.calcTips();
console.log(ali);
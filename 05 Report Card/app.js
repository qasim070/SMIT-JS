let obtainedMarks = +prompt("Enter Obtained Marks");
let totalMarks = +prompt("Enter Total Marks");
 
let formula = Math.round(obtainedMarks/totalMarks * 100);

if(formula < 60 ){
    document.write( "Your Grade is F & Your Percentage is " + formula + "%");
}   else if(formula < 70 ){
    document.write( "Your Grade is D & Your Percentage is " + formula + "%");
}else if(formula < 80 ){
    document.write( "Your Grade is C & Your Percentage is " + formula + "%");
}else if(formula < 90 ){
    document.write( "Your Grade is B & Your Percentage is " + formula + "%");
}else if(formula < 100 ){
    document.write( "Your Grade is A & Your Percentage is " + formula + "%");
}
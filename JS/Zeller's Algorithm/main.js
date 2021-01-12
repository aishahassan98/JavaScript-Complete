/*
D (0-31)
M (1-12)
Y (1999) Whole year
*/
/* In zeller formula, the month starts from March so March=1, April=2, Dec=10, Feb=12 etc*/

function Zeller(D, M, Y){    
    var Day = "";
 
    if (M < 3)
    {
        M = M + 12;
        Y = Y - 1;
    }
 
    var YF = Math.floor(Y / 100);
     var YL = Y - (100 * YF);
     
     var S = Math.floor(2.6 * M - 5.39) + Math.floor(YL / 4) + Math.floor(YF / 4) + D + YL - (2 * YF);
     
    var ans = S - (7 * Math.floor(S / 7));
 
    if (ans == 0)
    {
        Day = "Sunday";
    }
    else if (ans == 1)
    {
        Day = "Monday";
    }
    else if (ans == 2)
    {
        Day = "Tuesday";
    }
    else if (ans == 3)
    {
        Day = "Wednesday";
    }
    else if (ans == 4)
    {
        Day = "Thursday";
    }
    else if (ans == 5)
    {
        Day = "Friday";
    }
    else 
    {
        Day = "Saturday";
    }
 
    return Day;
 }
 
 let Day = Zeller(27, 11, 1998);  //calling the function and assigning it to a variable
 console.log(Day);               //display the Day variable in the console
 
var fs = require("fs");

var action = process.argv[2];
var transaction = process.argv[3];
var transactionArr;

switch (action) {
    case "total":
        total();
        break;

    case "deposit":
        deposit();
        break;

        //  case "withdraw":
        //      total();
        //      break;

        //  case "lotto":
        //      total();
        //      break;
}


function total() {

    fs.readFile("bank.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.split(", ")
        var result = 0;

        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {
                result += parseFloat(data[i]);
            }
        }
        console.log("you have a total of " + result.toFixed(2));
    });

}

function deposit() {
     
    fs.appendFile("bank.txt", transactionArr, "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
console.log(typeof transaction);

      transactionArr = transaction.split(" , "); 
       console.log("-------------------------");
       console.log("This is the type:");
       console.log(typeof transactionArr);
       console.log("the transactionArr is " + transactionArr);
    });
}
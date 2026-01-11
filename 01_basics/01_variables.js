const accountId="1122334455"
let accountEmail="gauriverma@google.com"
var accountPasssword="12345"
accountCity="Jhansi"
let accountState; 
// not necessary to put a value in a variable; hum sirf declare krke chhodh sakte h//

//accountId=2 // not allowed for const
accountEmail="gv@google.com"
accountPasssword="6789"
accountCity="Bengaluru"

/*console.log(accountId);
console.log(accountEmail);
console.log(accountPasssword);
console.log(accountCity);  instead of this write it in another method of console i.e. table*/

console.table([accountId,accountEmail,accountPasssword,accountCity,accountState])
/* 
prefer not to use var because of issue in block scope and functional scope
so only use const and let
even without using const let var we can still declare a variable but this is not safe.
no need to put semi colon ; we can put though

*/
 
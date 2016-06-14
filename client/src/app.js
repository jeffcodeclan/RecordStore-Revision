var Store = require('./store/store.js');
var sampleAccounts = require('./sample.json');
var Account = require('./store/account.js');

window.onload = function() {
 console.log("Sample accounts ", sampleAccounts);

 var store = new Store();

 for(accountData of sampleAccounts) {
   store.addAccount(new Account(accountData));
 }

 console.log("We created a Recordstore in the browser!", store);

 var total = document.getElementById('total')
 total.innerText = "Total Record Stock: £" + store.totalCash();


 var accountList = document.getElementById('accounts');
 for(account of store.accounts){
   var accountListItem = document.createElement('li');
   accountListItem.innerText = account.owner + ": £" + account.amount;
   accountList.appendChild(accountListItem);
 }

}


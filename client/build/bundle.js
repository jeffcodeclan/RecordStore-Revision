/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Store = __webpack_require__(1);
	var sampleAccounts = __webpack_require__(2);
	var Account = __webpack_require__(3);
	
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
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Store = function(){
	  this.accounts = [];
	}
	
	Store.prototype = {
	  addAccount: function(account){
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName){
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName){
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type){
	    if(!type) return this.accounts
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type){
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	}
	
	module.exports = Store;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "Nirvana",
	    "amount": 19.99,
	  },
	  { "owner": "Metallica",
	    "amount": 8.99,
	  },
	  { "owner": "Oasis",
	    "amount": 7.99,
	  },
	  { "owner": "Prodigy",
	    "amount": 6.99,
	  },
	  { "owner": "Libertines",
	    "amount": 5.99,
	  },
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Account = function(params){
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
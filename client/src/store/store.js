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

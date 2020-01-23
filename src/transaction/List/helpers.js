export const countActions = transaction => {
    if (hasActions(transaction)) {
      return transaction.actions.length;
    }
    return 0;
  }; 
export const hasActions = transaction => {
    if (transaction && transaction.hasOwnProperty("actions")) {
      return true;
    }
    return false;
  };
```javascript
//Solution using Firestore transactions to avoid data loss
db.runTransaction(transaction => {
  return transaction.get(db.collection('users').doc('user1')).then(doc => {
    if (!doc.exists) {
      throw new Error('Document does not exist!');
    }
    const newCounter = doc.data().counter + 1;
    transaction.update(db.collection('users').doc('user1'), {
      counter: newCounter
    });
    return newCounter;
  });
}).then(result => {
  console.log('Transaction successful, new counter:', result);
}).catch(error => {
  console.error('Transaction failed:', error);
});
```
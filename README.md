# Firebase Firestore Optimistic Update Conflict

This repository demonstrates a subtle bug in Firebase Firestore related to optimistic updates and concurrent modifications. When multiple clients attempt to increment a counter simultaneously using `FieldValue.increment()`, there's a chance that one update will overwrite the other, leading to data loss.  The `bug.js` file showcases this issue, while `bugSolution.js` provides a robust solution using transactions to guarantee data consistency.

## Problem
The problem arises from the optimistic nature of Firestore updates.  Each client updates the data independently, without considering concurrent changes. If two clients increment the counter at roughly the same time, one update might be lost.

## Solution
The solution involves using Firestore transactions.  A transaction ensures that the update happens atomically, preventing conflicts and preserving data integrity.  The solution is presented in `bugSolution.js`.
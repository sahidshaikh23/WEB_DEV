let account2 = [
  { name: "Kushagra", Balance: 20000000000 },
  { name: "Param", Balance: 2220000 },
  { name: "Anurag", Balance: 10 },
];

withdraw = (cus, amt) => {
  for (let i = 0; i < account2.length; i++)
    if (account2[i].name == cus) {
      account2[i].Balance -= amt;
      console.log(`Updated Balance is: ${account2[i].Balance}`);
    }
};
diposit = (cus, amt) => {
  for (let i = 0; i < account2.length; i++)
    if (account2[i].name == cus) {
      account2[i].Balance += amt;
      console.log(`Updated Balance is: ${account2[i].Balance}`);
    }
};

withdraw("Anurag", 200);
diposit("Anurag", 5);

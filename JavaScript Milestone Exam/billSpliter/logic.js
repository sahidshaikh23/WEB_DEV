var TotalBill, CostEachPerson;
const button = "need more";
let netBill = new Object();

function bill(cost1, cost2, cost3, cost4, people) {
  let total = cost1 + cost2 + cost3 + cost4;
  let perHead = total / people;
  return { TotalBill: total, CostEachPerson: perHead };
}
console.log(bill(20, 20, 10, 50, 4));

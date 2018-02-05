const nums = [1, 2, 3, 4, 5, 6];

function sumFor(numa) {
  let total = 0;
  for (const ele of numa) {
    total += ele;
  }
  return total;
}
console.log(sumFor(nums));

function sumWhile(numb) {
  let total = 0;
  let index = 0;
  while (index < numb.length) {
    total += nums[index];
    index++;
  }
  return total;
}
console.log(sumWhile(nums));

function sumRecursion(numc) {
  if (numc.length === 0) {
    return 0;
  }
  return numc[0] + sumRecursion(numc.slice(1));
}
console.log(sumRecursion(nums));


function sumTheSimpleWay(numd) {
  return _.reduce(numd, function (demo, num) { return demo + num; }, 0);
}
console.log(sumTheSimpleWay(nums));


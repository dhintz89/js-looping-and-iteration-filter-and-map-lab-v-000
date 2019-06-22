// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (driver) {return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(arr, rev) {
  const highDollarDrivers = arr.filter(function(driver){return driver.revenue > rev});
  return highDollarDrivers.map(function(driver){return driver.name});
}

function exactMatch(arr, obj) {
  let key = Object.keys(obj)[0];
  return arr.filter(function(driver){return driver[key] === obj[key]});
}

function exactMatchToList(arr, obj) {
  
}
  let key = Object.keys(obj)[0];
  return arr.filter(function(driver){return driver[key] === obj[key]});
}
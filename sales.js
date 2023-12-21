const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
const companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];

const calculateSalesTax = function(salesData, taxRates) {
    // Implement your code here
  let result = {};
  let totalSale = 0;
  for (let i = 0; i < salesData.length; i ++) {
    totalSale = 0;
    for (let j = 0; j < salesData[i].sales.length; j ++) {
      totalSale += salesData[i].sales[j];
    }
    if (result[salesData[i].name] == null) {
      result[salesData[i].name] = {totalSales: 0, totalTaxes: 0};
    }
    result[salesData[i].name].totalSales += totalSale;
    result[salesData[i].name].totalTaxes += totalSale * taxRates[salesData[i].province];
  }
  return result;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
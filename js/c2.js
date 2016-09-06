app.controller("IAController",['$scope','$timeout','AgeCalculator','ScenarioOne','ScenarioTwo','ChartServiceHc','DonutChartServiceHc',function($scope,$timeout,AgeCalculator,ScenarioOne,ScenarioTwo,ChartServiceHc,DonutChartServiceHc){
	
	 function PV(rate, periods, payment, future, type) {
    // Initialize type
    var type = (typeof type === 'undefined') ? 0 : type;

  	// Evaluate rate and periods (TODO: replace with secure expression evaluator)
  	rate = eval(rate);
  	periods = eval(periods);

  	// Return present value
  	if (rate === 0) {
    return - payment * periods - future;
  	} else {
    	return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
  	}
	} 

	$scope.age = 40;
	$scope.grossAnnualIncome = 120000;

	//Assets
	$scope.homeValue = 800000;
	$scope.cashAtBank = 20000;
	$scope.otherInvestment = 20000;
	$scope.superBalance = 100000;


	//Liability
    $scope.homeMortgage = 500000;
    $scope.investmentPropertyMortgage = 0;
    $scope.creditCardDebt = 2000;
    $scope.carLoan = 20000;
    $scope.personalLoan = 0;
    $scope.otherLoan = 0;


    //Other Expenses
    $scope.haveSpouse = true;
    $scope.spouseReturnToWork = true;
    $scope.spouseSalary = 50000;
    $scope.ageSpouse = 40;
    $scope.numChildren = 1;
    $scope.ageChildren1 = 10;
    // $scope.ageChildren2 = 20;
    $scope.funeralCost = 20000;
    $scope.educationExpensePerYearPerChild = 5000;
    $scope.familyLivingCostPerYear = 90000;

    var PVExpenseSpouse;

    if(!$scope.haveSpouse){
    	PVExpenseSpouse = 0;
    }else{
    	if(!$scope.spouseReturnToWork){
    		PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn,65-$scope.ageSpouse,$scope.familyLivingCostPerYear,0,0));
    	}else{
    		PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn,65-$scope.ageSpouse,$scope.familyLivingCostPerYear - $scope.spouseSalary,0,0));
    	}
    }

    var PVExpenseChildren;

    if($scope.numChildren == 0){
    	PVExpenseChildren = 0;
    }else{
    	PVExpenseChildren = Math.abs(PV($scope.realRateOfReturn,25-$scope.ageChildren1,$scope.educationExpensePerYearPerChild,0,0));
    	}


    //ExistingCovers
    $scope.ecLife = 250000;
    $scope.ecTPD = 0;
    $scope.ecIP= 0;
    $scope.ecTrauma = 0;

    //Assumptions
    $scope.inflation = 0.02;
    $scope.rateOfReturn =  0.05;
    $scope.realRateOfReturn = (1 + $scope.rateOfReturn)/(1+$scope.inflation)-1;
    $scope.D34 = Math.power(1+$scope.rateOfReturn,Number(100/1200.toFixed(2)) - 1;  

    // Additional Questions
    $scope.moveToNewProperty = true;
    $scope.valueOfNewProperty = 500000;
    $scope.saleProceeds = $scope.homeValue - $scope.homeMortgage;
    $scope.moneyToBeBorrowed = 400000;

    //ScenarioOneInputs
    var sAssets = $scope.cashAtBank + $scope.otherInvestment + $scope.superBalance;
    var sLiability = $scope.homeMortgage + $scope.investmentPropertyMortgage + $scope.creditCardDebt +
    $scope.carLoan + $scope.personalLoan + $scope.otherLoan;
    var PVExpenseLife = PVExpenseSpouse + PVExpenseChildren + $scope.funeralCost;
    var PVExpenseTPD = PVExpenseLife - $scope.funeralCost;
    var IP1 = Number(($scope.grossAnnualIncome * 0.75)/12.toFixed(2));
    var IP2 = Math.abs(PV($scope.D34,(65-$scope.age)*12,IP1,0,0));
    var Trauma1 = 225000;
    var Trauma2 = Math.abs(PV($scope.D34,24,0.25*$scope.grossAnnualIncome/12,0,0));

    $scope.resultS1 = calculateResult(sAssets,sLiability,PVExpenseLife,PVExpenseTPD,IP1,IP2,Trauma1,Trauma2,$scope.ecLife,
    	$scope.ecTPD,$scope.ecIP,$scope.ecTrauma);


    //ScenarioTwo
    var additionalAssets;
    if($scope.moneyToBeBorrowed + $scope.saleProceeds > $scope.valueOfNewProperty){
    	additionalAssets = $scope.moneyToBeBorrowed + $scope.saleProceeds - $scope.valueOfNewProperty;
    }else{
    	additionalAssets = 0; 
    }
    var s2Assets = $scope.cashAtBank + $scope.otherInvestment + $scope.superBalance + additionalAssets;
    var s2Liability = $scope.investmentPropertyMortgage + $scope.creditCardDebt +
    $scope.carLoan + $scope.personalLoan + $scope.otherLoan + $scope.moneyToBeBorrowed;
    var PVExpenseLife2 = PVExpenseSpouse + PVExpenseChildren;
    var PVExpenseTPD2 = PVExpenseLifeife2;
    // var IP1 = Number(($scope.grossAnnualIncome * 0.75)/12.toFixed(2));
    // var IP2 = Math.abs(PV($scope.D34,(65-$scope.age)*12,IP1,0,0));
    // var Trauma1 = 225000;
    // var Trauma2 = Math.abs(PV($scope.D34,24,0.25*$scope.grossAnnualIncome/12,0,0));

    $scope.resultS2 = calculateResult(s2Assets,s2Liability,PVExpenseLife2,PVExpenseTPD2,IP1,IP2,Trauma1,Trauma2,$scope.ecLife,
    	$scope.ecTPD,$scope.ecIP,$scope.ecTrauma);    

    function calculateResult(asset,liability,PVExpenseLife,PVExpenseTPD,IP1,IP2,Trauma1,Trauma2,
      ecLife,ecTPD,ecIP,ecTrauma){

    var requiredLifeCover = PVExpenseLife + liability - asset - ecLife;

    var requiredTPDCover = PVExpenseTPD + liability - asset - IP2 - ecTPD;

    var requiredIPCover = IP1 - ecIP;

    var requiredTraumaCover = Trauma1 + Trauma2 - ecTrauma;

    return {
      life : requiredLifeCover,
      TPD : requiredTPDCover,
      IP : requiredIPCover,
      trauma :requiredTraumaCover,
      waiting : 30
    }; 

    };



}]);

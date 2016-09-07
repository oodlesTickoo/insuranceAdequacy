app.controller("TTRController",['$scope','$timeout','AgeCalculator','TaxRateCalculator','SGCRate','WithoutSSCalculator','WithSSCalculator','ChartServiceHc','DonutChartServiceHc',function($scope,$timeout,AgeCalculator,TaxRateCalculator,SGCRate,WithoutSSCalculator,WithSSCalculator,ChartServiceHc,DonutChartServiceHc){
    
    $scope.grossAnnualIncome = 10000;
    $scope.homeMortgage = 10000;
    $scope.investmentPropertyMortgage = 10000;
    $scope.creditCardDebt = 10000;
    $scope.carLoan = 10000;
    $scope.personalLoan = 10000;
    $scope.otherLoan = 10000;
    $scope.homeValue = 10000;
    $scope.cashAtBank = 10000;
    $scope.otherInvestment = 10000;
    $scope.superBalance = 10000;
    $scope.ecLife = 10000;
    $scope.ecTPD = 10000;
    $scope.ecIP = 10000;
    $scope.ecTrauma = 10000;
    $scope.numChildren = 5;
    $scope.funeralCost = 10000;
    $scope.educationExpensePerYearPerChild = 10000;
    $scope.familyLivingCostPerYear = 10000;
    $scope.inflation = 10;
    $scope.rateOfReturn = 10;
    $scope.moneyToBeBorrowed = 1000;
    $scope.valueOfNewProperty = 10000;
    $scope.ageSpouse = 60;
    $scope.spouseSalary = 100000;
    $scope.ageChildren1 = 10;
    $scope.ageChildren2 = 10;
    $scope.ageChildren3 = 10;
    $scope.ageChildren4 = 10;
    $scope.ageChildren5 = 10;
    $scope.ageChildren6 = 10;
    $scope.ageChildren7 = 10;
    $scope.ageChildren8 = 10;


  $scope.isToush=false;
  $scope.smokeOption=true;
  $scope.genderOption=true;
  $scope.spouseOption=false;
  $scope.smokeOption=false;
  $scope.spouseWorkOption=false;
  $scope.buyOption=false;


  $scope.menuDrop1=function(){
    $scope.isMenuDrop1=$scope.isMenuDrop1?false:true;
  }
  $scope.menuDrop2=function(){
    $scope.isMenuDrop2=$scope.isMenuDrop2?false:true;
  }
  $scope.menuDrop3=function(){
    $scope.isMenuDrop3=$scope.isMenuDrop3?false:true;
  }
  $scope.menuDrop4=function(){
    $scope.isMenuDrop4=$scope.isMenuDrop4?false:true;
  }
  $scope.menuDrop5=function(){
    $scope.isMenuDrop5=$scope.isMenuDrop5?false:true;
  }
  $scope.menuDrop6=function(){
    $scope.isMenuDrop5=$scope.isMenuDrop6?false:true;
  }

  $scope.nextDiv=function(div_num){
    switch(div_num){
      case 1: $scope.isMenuDrop1=true; 
      setTimeout(function() { $scope.isMenuDrop2=$scope.isMenuDrop2?false:true; console.log("kart");}, 1000);
      break;
      case 2: $scope.isMenuDrop2=true;$scope.isMenuDrop3=$scope.isMenuDrop3?false:true;
      break;
      case 3: $scope.isMenuDrop3=true;$scope.isMenuDrop4=$scope.isMenuDrop4?false:true;
      break;
      case 4: $scope.isMenuDrop4=true;$scope.isMenuDrop5=$scope.isMenuDrop5?false:true;
      break;
      case 5: $scope.isMenuDrop5=true;$scope.isMenuDrop6=$scope.isMenuDrop6?false:true;
      break;
      case 6: $scope.isMenuDrop6=true;

    }
  }
  var initDate = new Date();
  initDate.setYear(1998);
  initDate.setMonth(6);
  initDate.setDate(1);
  $scope.dob = initDate;
  
  $scope.infoShow=function(value){
    if(value){
      document.getElementsByClassName("information-overlay")[0].style.visibility="visible";
      document.getElementsByClassName("information-overlay")[0].style.zIndex="9999";
      document.getElementsByClassName("information-overlay")[0].style.position="inline-block";
      document.getElementsByClassName("information-overlay")[0].style.height =  ""+(document.getElementsByClassName("otrp-calculator")[0].clientHeight-10)+"px";
    }else{
      document.getElementsByClassName("information-overlay")[0].style.visibility="hidden";
    }
  }

  $scope.firstDP = function(){
        $scope.dateOptions.maxDate = new Date(1998,11,31);
        $scope.dateOptions.minDate = new Date(1950,0,1);
        console.log("firstDp",$scope.dateOptions.minDate);
  }

  $scope.secondDp = function(){
    delete $scope.dateOptions.maxDate;
  }

  $scope.today = function(){
      $scope.dt = new Date();
  };
    $scope.today();

    $scope.clear = function() {
      $scope.dt = null;
    };

    $scope.inlineOptions = {
      customClass: getDayClass,
      showWeeks: true
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      showWeeks: false
    };

    $scope.open1 = function() {
      $scope.popup1.opened = true;
      $scope.firstDP();
    };

    $scope.open2 = function() {
      $scope.secondDp();
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate','dd/MM/yyyy','d!/M!/yyyy'];
    $scope.format = $scope.formats[5];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    }

    $scope.age = AgeCalculator.getAge($scope.dob,$scope.fy);





    

    var grossAnnualIncomeSlider = document.getElementById('grossAnnualIncomeSlider'),
    homeMortgageSlider = document.getElementById('homeMortgageSlider'),
    investmentPropertyMortgageSlider = document.getElementById('investmentPropertyMortgageSlider'),
    creditCardDebtSlider = document.getElementById('creditCardDebtSlider'),
    carLoanSlider = document.getElementById('carLoanSlider'),
    personalLoanSlider = document.getElementById('personalLoanSlider'),
    otherLoanSlider = document.getElementById('otherLoanSlider'),
    homeValueSlider = document.getElementById('homeValueSlider'),
    cashAtBankSlider = document.getElementById('cashAtBankSlider'),
    otherInvestmentSlider = document.getElementById('otherInvestmentSlider'),
    superBalanceSlider = document.getElementById('superBalanceSlider'),
    ecLifeSlider = document.getElementById('ecLifeSlider'),
    ecTPDSlider = document.getElementById('ecTPDSlider'),
    ecIPSlider = document.getElementById('ecIPSlider'),
    ecTraumaSlider = document.getElementById('ecTraumaSlider'),
    numChildrenSlider = document.getElementById('numChildrenSlider'),
    funeralCostSlider = document.getElementById('funeralCostSlider'),
    educationExpensePerYearPerChildSlider = document.getElementById('educationExpensePerYearPerChildSlider'),
    familyLivingCostPerYearSlider = document.getElementById('familyLivingCostPerYearSlider'),
    inflationSlider = document.getElementById('inflationSlider'),
    rateOfReturnSlider = document.getElementById('rateOfReturnSlider');
    valueOfNewPropertySlider = document.getElementById('valueOfNewPropertySlider'),
    moneyToBeBorrowedSlider = document.getElementById('moneyToBeBorrowedSlider');
    ageSpouseSlider = document.getElementById('ageSpouseSlider');
    spouseSalarySlider = document.getElementById('spouseSalarySlider');
    ageChildren1Slider = document.getElementById('ageChildren1Slider');
    ageChildren2Slider = document.getElementById('ageChildren2Slider');
    ageChildren3Slider = document.getElementById('ageChildren3Slider');
    ageChildren4Slider = document.getElementById('ageChildren4Slider');
    ageChildren5Slider = document.getElementById('ageChildren5Slider');
    ageChildren6Slider = document.getElementById('ageChildren6Slider');
    ageChildren7Slider = document.getElementById('ageChildren7Slider');
    ageChildren8Slider = document.getElementById('ageChildren8Slider');


    noUiSlider.create(grossAnnualIncomeSlider, {
     start: [$scope.grossAnnualIncome],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','

    }),
    connect : 'lower'
    });

    noUiSlider.create(homeMortgageSlider, {
     start: [$scope.homeMortgage],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','

    }),
    connect : 'lower'
    });

    noUiSlider.create(investmentPropertyMortgageSlider, {
     start: [$scope.investmentPropertyMortgage],
     range: {
      'min': [0],
      'max': [10000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(personalLoanSlider, {
     start: [$scope.personalLoan],
     range: {
      'min': [0],
      'max': [1000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(creditCardDebtSlider, {
     start: [$scope.creditCardDebt],
     range: {
      'min': [0],
      'max': [200000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(carLoanSlider, {
     start: [$scope.carLoan],
     range: {
      'min': [0],
      'max': [1000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(otherLoanSlider, {
     start: [$scope.otherLoan],
     range: {
      'min': [0],
      'max': [1000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });


    noUiSlider.create(homeValueSlider, {
     start: [$scope.homeValue],
     range: {
      'min': [0],
      'max': [10000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(cashAtBankSlider, {
     start: [$scope.cashAtBank],
     range: {
      'min': [0],
      'max': [1000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(otherInvestmentSlider, {
     start: [$scope.otherInvestment],
     range: {
      'min': [0],
      'max': [10000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(superBalanceSlider, {
     start: [$scope.superBalance],
     range: {
      'min': [0],
      'max': [10000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(ecLifeSlider, {
     start: [$scope.ecLife],
     range: {
      'min': [0],
      'max': [10000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(ecTPDSlider, {
     start: [$scope.ecTPD],
     range: {
      'min': [0],
      'max': [10000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(ecIPSlider, {
     start: [$scope.ecIP],
     range: {
      'min': [0],
      'max': [20000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(ecTraumaSlider, {
     start: [$scope.ecTrauma],
     range: {
      'min': [0],
      'max': [100000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(numChildrenSlider, {
     start: [$scope.numChildren],
     range: {
      'min': [0],
      'max': [8]
     },
    step : 1,
    format: wNumb({
      decimals: 0,
    }),
    connect : 'lower'
    });

    noUiSlider.create(funeralCostSlider, {
     start: [$scope.funeralCost],
     range: {
      'min': [0],
      'max': [200000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(educationExpensePerYearPerChildSlider, {
     start: [$scope.educationExpensePerYearPerChild],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(familyLivingCostPerYearSlider, {
     start: [$scope.familyLivingCostPerYear],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(inflationSlider, {
     start: [$scope.inflation],
     range: {
      'min': [0],
      'max': [100]
     },
    step : 1,
    format: wNumb({
      decimals: 0,
      postfix: '%'
    }),
    connect : 'lower'
    });

    noUiSlider.create(rateOfReturnSlider, {
     start: [$scope.rateOfReturn],
     range: {
      'min': [0],
      'max': [100]
     },
    step : 1,
    format: wNumb({
      decimals: 0,
      postfix: '%'
    }),
    connect : 'lower'
    }); 

    noUiSlider.create(valueOfNewPropertySlider, {
     start: [$scope.valueOfNewProperty],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    noUiSlider.create(moneyToBeBorrowedSlider, {
     start: [$scope.moneyToBeBorrowed],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });   

      noUiSlider.create(ageSpouseSlider, {
     start: [$scope.ageSpouse],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 1,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });

    noUiSlider.create(spouseSalarySlider, {
     start: [$scope.spouseSalary],
     range: {
      'min': [0],
      'max': [5000000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });   

    noUiSlider.create(ageChildren1Slider, {
     start: [$scope.ageChildren1],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren2Slider, {
     start: [$scope.ageChildren2],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren3Slider, {
     start: [$scope.ageChildren3],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren4Slider, {
     start: [$scope.ageChildren4],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren5Slider, {
     start: [$scope.ageChildren5],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren6Slider, {
     start: [$scope.ageChildren6],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren7Slider, {
     start: [$scope.ageChildren7],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   
    noUiSlider.create(ageChildren8Slider, {
     start: [$scope.ageChildren8],
     range: {
      'min': [0],
      'max': [75]
     },
    step : 10,
    format: wNumb({
      decimals: 0
    }),
    connect : 'lower'
    });   


    var ageInput = document.getElementById('ageInput'),
    grossAnnualIncomeInput = document.getElementById('grossAnnualIncomeInput'),
    homeMortgageInput = document.getElementById('homeMortgageInput'),
    investmentPropertyMortgageInput = document.getElementById('investmentPropertyMortgageInput'),
    creditCardDebtInput = document.getElementById('creditCardDebtInput'),
    carLoanInput = document.getElementById('carLoanInput'),
    personalLoanInput = document.getElementById('personalLoanInput'),
    otherLoanInput = document.getElementById('otherLoanInput'),
    homeValueInput = document.getElementById('homeValueInput'),
    cashAtBankInput = document.getElementById('cashAtBankInput'),
    otherInvestmentInput = document.getElementById('otherInvestmentInput'),
    superBalanceInput = document.getElementById('superBalanceInput'),
    ecLifeInput = document.getElementById('ecLifeInput'),
    ecTPDInput = document.getElementById('ecTPDInput'),
    ecIPInput = document.getElementById('ecIPInput'),
    ecTraumaInput = document.getElementById('ecTraumaInput'),
    numChildrenInput = document.getElementById('numChildrenInput'),
    funeralCostInput = document.getElementById('funeralCostInput'),
    educationExpensePerYearPerChildInput = document.getElementById('educationExpensePerYearPerChildInput'),
    familyLivingCostPerYearInput = document.getElementById('familyLivingCostPerYearInput'),
    inflationInput = document.getElementById('inflationInput'),
    rateOfReturnInput = document.getElementById('rateOfReturnInput');
    valueOfNewPropertyInput = document.getElementById('valueOfNewPropertyInput'),
    moneyToBeBorrowedInput = document.getElementById('moneyToBeBorrowedInput'),
    ageSpouseInput = document.getElementById('ageSpouseInput'),
    spouseSalaryInput = document.getElementById('spouseSalaryInput');
    ageChildren1Input = document.getElementById('ageChildren1Input');
    ageChildren2Input = document.getElementById('ageChildren2Input');
    ageChildren3Input = document.getElementById('ageChildren3Input');
    ageChildren4Input = document.getElementById('ageChildren4Input');
    ageChildren5Input = document.getElementById('ageChildren5Input');
    ageChildren6Input = document.getElementById('ageChildren6Input');
    ageChildren7Input = document.getElementById('ageChildren7Input');
    ageChildren8Input = document.getElementById('ageChildren8Input');


    function noChildren(num){
      for(var i=1;i<=num;i++){
       document.getElementsByClassName("c"+i)[0].style.display='block';
      }
      for(var i=(num+1);i<=8;i++){
        document.getElementsByClassName("c"+i)[0].style.display='none';
      }
    }
    
    grossAnnualIncomeSlider.noUiSlider.on('update', function( values, handle ) {
    grossAnnualIncomeInput.value = values[handle];
    $scope.grossAnnualIncome = Number(values[handle]);
    });

    homeMortgageSlider.noUiSlider.on('update', function( values, handle ) {
    homeMortgageInput.value = values[handle];
    $scope.homeMortgage = Number(values[handle]);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('update', function( values, handle ) {
    investmentPropertyMortgageInput.value = values[handle];
    $scope.investmentPropertyMortgage = Number(values[handle]);
    });

    creditCardDebtSlider.noUiSlider.on('update', function( values, handle ) {
    creditCardDebtInput.value = values[handle];
    $scope.creditCardDebt = Number(values[handle]);
    });

    carLoanSlider.noUiSlider.on('update', function( values, handle ) {
    carLoanInput.value = values[handle];
    $scope.carLoan = Number(values[handle]);
    });

    personalLoanSlider.noUiSlider.on('update', function( values, handle ) {
    personalLoanInput.value = values[handle];
    $scope.personalLoan = Number(values[handle]);
    });

    otherLoanSlider.noUiSlider.on('update', function( values, handle ) {
    otherLoanInput.value = values[handle];
    $scope.otherLoan = Number(values[handle]);
    });

    homeValueSlider.noUiSlider.on('update', function( values, handle ) {
    homeValueInput.value = values[handle];
    $scope.homeValue = Number(values[handle]);
    });

    cashAtBankSlider.noUiSlider.on('update', function( values, handle ) {
    cashAtBankInput.value = values[handle];
    $scope.cashAtBank = Number(values[handle]);
    });

    otherInvestmentSlider.noUiSlider.on('update', function( values, handle ) {
    otherInvestmentInput.value = values[handle];
    $scope.otherInvestment = Number(values[handle]);
    });

    superBalanceSlider.noUiSlider.on('update', function( values, handle ) {
    superBalanceInput.value = values[handle];
    $scope.superBalance = Number(values[handle]);
    });

    ecLifeSlider.noUiSlider.on('update', function( values, handle ) {
    ecLifeInput.value = values[handle];
    $scope.ecLife = Number(values[handle]);
    });

    ecTPDSlider.noUiSlider.on('update', function( values, handle ) {
    ecTPDInput.value = values[handle];
    $scope.ecTPD = Number(values[handle]);
    });

    ecIPSlider.noUiSlider.on('update', function( values, handle ) {
    ecIPInput.value = values[handle];
    $scope.ecIP = Number(values[handle]);
    });

    ecTraumaSlider.noUiSlider.on('update', function( values, handle ) {
    ecTraumaInput.value = values[handle];
    $scope.ecTrauma = Number(values[handle]);
    });

    numChildrenSlider.noUiSlider.on('update', function( values, handle ) {
    numChildrenInput.value = values[handle];
    $scope.numChildren = Number(values[handle]);
    noChildren($scope.numChildren);
    });


    funeralCostSlider.noUiSlider.on('update', function( values, handle ) {
    funeralCostInput.value = values[handle];
    $scope.funeralCost = Number(values[handle]);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('update', function( values, handle ) {
    educationExpensePerYearPerChildInput.value = values[handle];
    $scope.educationExpensePerYearPerChild = Number(values[handle]);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('update', function( values, handle ) {
    familyLivingCostPerYearInput.value = values[handle];
    $scope.familyLivingCostPerYear = Number(values[handle]);
    });

    inflationSlider.noUiSlider.on('update', function( values, handle ) {
    inflationInput.value = values[handle];
    $scope.inflation = Number(values[handle]);
    });

    rateOfReturnSlider.noUiSlider.on('update', function( values, handle ) {
    rateOfReturnInput.value = values[handle];
    $scope.rateOfReturn = Number(values[handle]);
    });

    valueOfNewPropertySlider.noUiSlider.on('update', function( values, handle ) {
    valueOfNewPropertyInput.value = values[handle];
    $scope.valueOfNewProperty = Number(values[handle]);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('update', function( values, handle ) {
    moneyToBeBorrowedInput.value = values[handle];
    $scope.moneyToBeBorrowed = Number(values[handle]);
    });

    ageSpouseSlider.noUiSlider.on('update', function( values, handle ) {
    ageSpouseInput.value = values[handle];
    $scope.ageSpouse = Number(values[handle]);
    });

    spouseSalarySlider.noUiSlider.on('update', function( values, handle ) {
    spouseSalaryInput.value = values[handle];
    $scope.spouseSalary = Number(values[handle]);
    });

    ageChildren1Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren1Input.value = values[handle];
    $scope.ageChildren1 = Number(values[handle]);
    });
    ageChildren2Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren2Input.value = values[handle];
    $scope.ageChildren2 = Number(values[handle]);
    });
    ageChildren3Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren3Input.value = values[handle];
    $scope.ageChildren3 = Number(values[handle]);
    });
    ageChildren4Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren4Input.value = values[handle];
    $scope.ageChildren4 = Number(values[handle]);
    });
    ageChildren5Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren5Input.value = values[handle];
    $scope.ageChildren5 = Number(values[handle]);
    });
    ageChildren6Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren6Input.value = values[handle];
    $scope.ageChildren6 = Number(values[handle]);
    });
    ageChildren7Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren7Input.value = values[handle];
    $scope.ageChildren7 = Number(values[handle]);
    });
    ageChildren8Slider.noUiSlider.on('update', function( values, handle ) {
    ageChildren8Input.value = values[handle];
    $scope.ageChildren8 = Number(values[handle]);
    });

    numChildrenInput.addEventListener("change",function(){
      numChildrenSlider.noUiSlider.set($scope.numChildren);
      noChildren($scope.numChildren);
    })


    grossAnnualIncomeSlider.noUiSlider.on('set', function( values, handle ) {
    grossAnnualIncomeInput.value = values[handle];
    $scope.grossAnnualIncome = Number(values[handle]);
    });

    homeMortgageSlider.noUiSlider.on('set', function( values, handle ) {
    homeMortgageInput.value = values[handle];
    $scope.homeMortgage = Number(values[handle]);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('set', function( values, handle ) {
    investmentPropertyMortgageInput.value = values[handle];
    $scope.investmentPropertyMortgage = Number(values[handle]);
    });

    creditCardDebtSlider.noUiSlider.on('set', function( values, handle ) {
    creditCardDebtInput.value = values[handle];
    $scope.creditCardDebt = Number(values[handle]);
    });

    carLoanSlider.noUiSlider.on('set', function( values, handle ) {
    carLoanInput.value = values[handle];
    $scope.carLoan = Number(values[handle]);
    });

    personalLoanSlider.noUiSlider.on('set', function( values, handle ) {
    personalLoanInput.value = values[handle];
    $scope.personalLoan = Number(values[handle]);
    });

    otherLoanSlider.noUiSlider.on('set', function( values, handle ) {
    otherLoanInput.value = values[handle];
    $scope.otherLoan = Number(values[handle]);
    });

    homeValueSlider.noUiSlider.on('set', function( values, handle ) {
    homeValueInput.value = values[handle];
    $scope.homeValue = Number(values[handle]);
    });

    cashAtBankSlider.noUiSlider.on('set', function( values, handle ) {
    cashAtBankInput.value = values[handle];
    $scope.cashAtBank = Number(values[handle]);
    });

    otherInvestmentSlider.noUiSlider.on('set', function( values, handle ) {
    otherInvestmentInput.value = values[handle];
    $scope.otherInvestment = Number(values[handle]);
    });

    superBalanceSlider.noUiSlider.on('set', function( values, handle ) {
    superBalanceInput.value = values[handle];
    $scope.superBalance = Number(values[handle]);
    });

    ecLifeSlider.noUiSlider.on('set', function( values, handle ) {
    ecLifeInput.value = values[handle];
    $scope.ecLife = Number(values[handle]);
    });

    ecTPDSlider.noUiSlider.on('set', function( values, handle ) {
    ecTPDInput.value = values[handle];
    $scope.ecTPD = Number(values[handle]);
    });

    ecIPSlider.noUiSlider.on('set', function( values, handle ) {
    ecIPInput.value = values[handle];
    $scope.ecIP = Number(values[handle]);
    });

    ecTraumaSlider.noUiSlider.on('set', function( values, handle ) {
    ecTraumaInput.value = values[handle];
    $scope.ecTrauma = Number(values[handle]);
    });

    numChildrenSlider.noUiSlider.on('set', function( values, handle ) {
    numChildrenInput.value = values[handle];
    $scope.numChildren = Number(values[handle]);
    });


    funeralCostSlider.noUiSlider.on('set', function( values, handle ) {
    funeralCostInput.value = values[handle];
    $scope.funeralCost = Number(values[handle]);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('set', function( values, handle ) {
    educationExpensePerYearPerChildInput.value = values[handle];
    $scope.educationExpensePerYearPerChild = Number(values[handle]);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('set', function( values, handle ) {
    familyLivingCostPerYearInput.value = values[handle];
    $scope.familyLivingCostPerYear = Number(values[handle]);
    });

    inflationSlider.noUiSlider.on('set', function( values, handle ) {
    inflationInput.value = values[handle];
    $scope.inflation = Number(values[handle]);
    });

    rateOfReturnSlider.noUiSlider.on('set', function( values, handle ) {
    rateOfReturnInput.value = values[handle];
    $scope.rateOfReturn = Number(values[handle]);
    });

    valueOfNewPropertySlider.noUiSlider.on('set', function( values, handle ) {
    valueOfNewPropertyInput.value = values[handle];
    $scope.valueOfNewProperty = Number(values[handle]);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('set', function( values, handle ) {
    moneyToBeBorrowedInput.value = values[handle];
    $scope.moneyToBeBorrowed = Number(values[handle]);
    });

    ageSpouseSlider.noUiSlider.on('set', function( values, handle ) {
    ageSpouseInput.value = values[handle];
    $scope.ageSpouse = Number(values[handle]);
    });

    spouseSalarySlider.noUiSlider.on('set', function( values, handle ) {
    spouseSalaryInput.value = values[handle];
    $scope.spouseSalary = Number(values[handle]);
    });


    ageChildren1Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren1Input.value = values[handle];
    $scope.ageChildren1 = Number(values[handle]);
    });
    ageChildren2Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren2Input.value = values[handle];
    $scope.ageChildren2 = Number(values[handle]);
    });
    ageChildren3Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren3Input.value = values[handle];
    $scope.ageChildren3 = Number(values[handle]);
    });
    ageChildren4Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren4Input.value = values[handle];
    $scope.ageChildren4 = Number(values[handle]);
    });
    ageChildren5Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren5Input.value = values[handle];
    $scope.ageChildren5 = Number(values[handle]);
    });
    ageChildren6Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren6Input.value = values[handle];
    $scope.ageChildren6 = Number(values[handle]);
    });
    ageChildren7Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren7Input.value = values[handle];
    $scope.ageChildren7 = Number(values[handle]);
    });
    ageChildren8Slider.noUiSlider.on('set', function( values, handle ) {
    ageChildren8Input.value = values[handle];
    $scope.ageChildren8 = Number(values[handle]);
    });

    function PV(rate, periods, payment, future, type) {
      // Initialize type
      var type = (typeof type === 'undefined') ? 0 : type;

      // Evaluate rate and periods (TODO: repersonalLoanace with secure expression evaluator)
      rate = eval(rate);
      periods = eval(periods);

      // Return present value
      if (rate === 0) {
        return - payment * periods - future;
      } else {
        return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
      }
    }

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
    var ageChild=[$scope.ageChildren1,$scope.ageChildren2,$scope.ageChildren3,$scope.ageChildren4,$scope.ageChildren5,$scope.ageChildren6,$scope.ageChildren7,$scope.ageChildren8]

    if($scope.numChildren == 0){
      PVExpenseChildren = 0;
    }else{

      for(var i=0;i<$scope.numChildren;i++){
        var temp=Math.abs(PV($scope.realRateOfReturn,25-ageChild[i],$scope.educationExpensePerYearPerChild,0,0));
        PVExpenseChildren=PVExpenseChildren+temp;
      }
    }

    $scope.realRateOfReturn = (1 + $scope.rateOfReturn)/(1+$scope.inflation)-1;
    $scope.D34 = Math.pow(1+$scope.rateOfReturn,Number((100/1200).toFixed(2))) - 1;  
    $scope.saleProceeds = $scope.homeValue - $scope.homeMortgage;


    //ScenarioOneInputs
    var sAssets = $scope.cashAtBank + $scope.otherInvestment + $scope.superBalance;
    var sLiability = $scope.homeMortgage + $scope.investmentPropertyMortgage + $scope.creditCardDebt +
    $scope.carLoan + $scope.personalLoan + $scope.otherLoan;
    var PVExpenseLife = PVExpenseSpouse + PVExpenseChildren + $scope.funeralCost;
    var PVExpenseTPD = PVExpenseLife - $scope.funeralCost;
    var IP1 = Number((($scope.grossAnnualIncome * 0.75)/12).toFixed(2));
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
    var PVExpenseTPD2 = PVExpenseLife2;
    // var IP1 = Number(($scope.grossAnnualIncome * 0.75)/12.toFixed(2));
    // var IP2 = Math.abs(PV($scope.D34,(65-$scope.age)*12,IP1,0,0));
    // var Trauma1 = 225000;
    // var Trauma2 = Math.abs(PV($scope.D34,24,0.25*$scope.grossAnnualIncome/12,0,0));

console.log("kumm");
    $scope.resultS2 = calculateResult(s2Assets,s2Liability,PVExpenseLife2,PVExpenseTPD2,IP1,IP2,Trauma1,Trauma2,$scope.ecLife,
    $scope.ecTPD,$scope.ecIP,$scope.ecTrauma);    

    function calculateResult(asset,liability,PVExpenseLife,PVExpenseTPD,IP1,IP2,Trauma1,Trauma2,
      ecLife,ecTPD,ecIP,ecTrauma){
      console.log("kumm");

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



console.log("kumm",$scope.resultS2);











}]);

app.controller("TTRController",['$scope','$timeout','AgeCalculator','TaxRateCalculator','SGCRate','WithoutSSCalculator','WithSSCalculator','ChartService','ChartServiceHc','DonutChartServiceHc',function($scope,$timeout,AgeCalculator,TaxRateCalculator,SGCRate,WithoutSSCalculator,WithSSCalculator,ChartService,ChartServiceHc,DonutChartServiceHc){

  // $scope.rate = SGCRate.calculateSGCRate(new Date(2011,11,11));

  // $scope.dob = new Date();
  // $scope.datePension = new Date();
  // $scope.datePension.setMonth(6);
  // $scope.datePension.setDate(1);
  $scope.resultWithSS=[0,0,0];
  $scope.resultWithoutSS=[0,0,0];

  // $scope.excludeSGC = 80000;
  // $scope.target = 40000;

  // $scope.maxTHP = 0; 

  // $scope.maxTHPError = false;

  // $scope.csesError = false;

  // $scope.thpError = false;

  // $scope.csesZeroError = false;

  $scope.chartOneOpen = true;
  
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
  // $scope.unattainableTHP = false;

  $scope.firstDP = function(){
    $scope.dateOptions.maxDate = new Date();
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
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      // dateDisabled: disabled,
      formatYear: 'yy',
      // maxDate: new Date(2020, 5, 22),
      // minDate: new Date(),
      startingDay: 1,
      showWeeks: false
    };

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

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
    // $scope.altInputFormats = ['d!/M!/yyyy'];

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

    // $scope.getAge = function(){
    //   $scope.age = AgeCalculator.getAge($scope.dob);
    // }

    // $scope.Math = window.Math;

    // $scope.calculationsDone = false;

    $scope.unattainableTHP = false;

    $scope.attainableTHP = false;

    $scope.unattainableTHPS = false;

    $scope.optimisedSS;

    $scope.needSS = true;


    $scope.overlay = false;


    $scope.age = 42;

    $scope.fy = 2017;

    $scope.cses = 80000;

    $scope.thp = 45000;

    $scope.maxTHP2 = 0;
    

    var ageSlider = document.getElementById('ageSlider'),
    fySlider = document.getElementById('fySlider'),
    csesSlider = document.getElementById('csesSlider'),
    thpSlider = document.getElementById('thpSlider');


    noUiSlider.create(ageSlider, {
     start: [$scope.age],
     range: {
      'min': [  18 ],
      'max': [ 65 ]
     },
    step : 1,
    format: wNumb({
     decimals: 0,
    }),
    connect : 'lower'
    });

    noUiSlider.create(fySlider, {
     start: [$scope.fy],
     range: {
      'min': [ 2015 ],
      'max': [ 2025 ]
     },
    step : 1,
    format: wNumb({
     decimals: 0,
    }),
    connect : 'lower'
    });

    noUiSlider.create(csesSlider, {
     start: [$scope.cses],
     range: {
      'min': [10000],
      'max': [300000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','

    }),
    connect : 'lower'
    });

    noUiSlider.create(thpSlider, {
     start: [$scope.thp],
     range: {
      'min': [1000],
      'max': [61000]
     },
    step : 500,
    format: wNumb({
      decimals: 0,
      prefix: '$',
      thousand: ','
    }),
    connect : 'lower'
    });

    $scope.calculateMaxTHP2 = function(){
      var cses1=$scope.cses.replace("$","").replace(",","");
      var thp1=$scope.thp.replace("$","").replace(",","");
    $scope.maxTHP2 =  Math.floor(WithoutSSCalculator.getFinalAmount($scope.age,$scope.fy,Number(cses1),Number(thp1),true));
    console.log($scope.maxTHP2)
    }

    var ageInput = document.getElementById('ageInput'),
    fyInput = document.getElementById('fyInput'),
    csesInput = document.getElementById('csesInput'),
    thpInput = document.getElementById('thpInput');

    ageSlider.noUiSlider.on('update', function( values, handle ) {
    ageInput.value = values[handle];
    $scope.age = Number(values[handle]);
    });

    fySlider.noUiSlider.on('update', function( values, handle ) {
    fyInput.value = values[handle];
    $scope.fy = Number(values[handle]);
    });

    csesSlider.noUiSlider.on('update', function( values, handle ) {
    csesInput.value = values[handle];
    $scope.cses = (values[handle]);
    });

    thpSlider.noUiSlider.on('update', function( values, handle ) {
    thpInput.value = values[handle];
    $scope.thp = (values[handle]);
    });


    $scope.submitForm2 = function(isValid){
      if(isValid){

      var cses1=$scope.cses.replace("$","").replace(",","");
      var thp1=$scope.thp.replace("$","").replace(",","");




        $scope.needSS = true;
        $scope.calculationsDone = true;
        $scope.resultWithoutSS = WithoutSSCalculator.getFinalAmount($scope.age,$scope.fy,Number(cses1),Number(thp1),false);
        console.log("rw/oss",$scope.resultWithoutSS.toString());
        $scope.thpWithoutSS = $scope.resultWithoutSS[0];
        $scope.taxWithoutSS = $scope.resultWithoutSS[1];
        $scope.finalAmountWithoutSS = $scope.resultWithoutSS[2];
        $scope.unattainableTHPS = $scope.resultWithoutSS[3];
        $scope.resultWithSS = WithSSCalculator.getFinalAmount($scope.age,$scope.fy,Number(cses1),Number(thp1),$scope.taxWithoutSS);
        console.log("rwss",$scope.resultWithSS.toString());
        $scope.thpWithSS = $scope.resultWithSS[0];
        $scope.taxWithSS = $scope.resultWithSS[1];
        $scope.finalAmountWithSS = $scope.resultWithSS[2];
        // $scope.finalSS = $scope.resultWithSS[3];
        $scope.optimisedSS = $scope.resultWithSS[3];
        $scope.unattainableTHP = $scope.resultWithSS[4];
        $scope.attainableTHP = !$scope.unattainableTHP;
        if(($scope.resultWithoutSS[2] - $scope.resultWithSS[2]) > 0){
          $scope.needSS = false;
        }
        if($scope.attainableTHP && !$scope.unattainableTHPS){
          // ChartService.createChart(Number($scope.thpWithoutSS.toFixed(2)),Number($scope.thpWithSS.toFixed(2)),Number(($scope.taxWithoutSS - $scope.taxWithSS).toFixed(2)), Number($scope.optimisedSS.toFixed(2)));
          ChartServiceHc.createChart(Number($scope.thpWithoutSS.toFixed(2)),Number($scope.thpWithSS.toFixed(2)),Number(($scope.taxWithoutSS - $scope.taxWithSS).toFixed(2)), Number($scope.optimisedSS.toFixed(2)));
          DonutChartServiceHc.createChart(Number($scope.thpWithoutSS.toFixed(2)),Number($scope.thpWithSS.toFixed(2)),Number(($scope.taxWithoutSS - $scope.taxWithSS).toFixed(2)), Number($scope.optimisedSS.toFixed(2)));

        }
        $timeout(0);
        console.log("complete2");
      }
      else{
        console.log("has errors");
      }
    }

    csesInput.addEventListener("change",function(){
      if(this.value < 10000){
        this.value = 10000;
      }
      csesSlider.noUiSlider.set($scope.cses);
    })

    $('#thpInput').on("change",function(){
      if(this.value < 1000){
        this.value = 1000;
      }
      thpSlider.noUiSlider.set($scope.thp);
      console.log("thp changes input",typeof($scope.thp));
    })

    $('#ageInput').on("change",function(){
      if(this.value <= 0){
        this.value = 18;
      }
      ageSlider.noUiSlider.set($scope.age);
    })

    $('#fyInput').on("change",function(){
      if(this.value < 2016){
        this.value = 2016;
      }
      fySlider.noUiSlider.set($scope.fy);
    })

    csesSlider.noUiSlider.on('set', function( values, handle ) {
    csesInput.value = values[handle];
    $scope.cses = (values[handle]);

    $scope.calculateMaxTHP2();

       thpSlider.noUiSlider.updateOptions({
    range: {
      'min': 1000,
      'max': Math.floor($scope.maxTHP2)-1
    },
    step :500,
    start: Math.floor($scope.maxTHP2) >= $scope.thp ? $scope.thp : $scope.maxTHP2
  });
       $scope.submitForm2(true);
    });

    ageSlider.noUiSlider.on('set', function( values, handle ) {
    ageInput.value = values[handle];
    $scope.age = Number(values[handle]);
    $scope.submitForm2(true);
    });

    fySlider.noUiSlider.on('set', function( values, handle ) {
    fyInput.value = values[handle];
    $scope.fy = Number(values[handle]);
    $scope.submitForm2(true);
    });

    thpSlider.noUiSlider.on('set', function( values, handle ) {
    thpInput.value = values[handle];
    $scope.thp = (values[handle]);
    $scope.submitForm2(true);
    });

    $scope.submitForm2(true);

    // $scope.$watch("formData", function(){
    // $scope.unattainableTHP = false;
    // $scope.attainableTHP = false;
    // }, true);
    



}]);

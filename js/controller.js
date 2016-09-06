app.controller("TTRController",['$scope','$timeout','AgeCalculator','TaxRateCalculator','SGCRate','WithoutSSCalculator','WithSSCalculator','ChartServiceHc','DonutChartServiceHc',function($scope,$timeout,AgeCalculator,TaxRateCalculator,SGCRate,WithoutSSCalculator,WithSSCalculator,ChartServiceHc,DonutChartServiceHc){
    
    $scope.gi = 10000;
    $scope.hm = 10000;
    $scope.ipm = 10000;
    $scope.ccd = 10000;
    $scope.cl = 10000;
    $scope.pl = 10000;
    $scope.ol = 10000;
    $scope.hv = 10000;
    $scope.cab = 10000;
    $scope.oi = 10000;
    $scope.sb = 10000;
    $scope.life = 10000;
    $scope.tpd = 10000;
    $scope.ip = 10000;
    $scope.trauma = 10000;
    $scope.nc = 5;
    $scope.fc = 10000;
    $scope.ee = 10000;
    $scope.fl = 10000;
    $scope.wi = 10;
    $scope.rr = 10;
    $scope.mb = 1000;
    $scope.vp = 10000;
    $scope.ageSp = 10;
    $scope.incomeSp = 100000;
    $scope.agC1 = 10;
    $scope.agC2 = 10;
    $scope.agC3 = 10;
    $scope.agC4 = 10;
    $scope.agC5 = 10;
    $scope.agC6 = 10;
    $scope.agC7 = 10;
    $scope.agC8 = 10;


  $scope.isToush=false;
  $scope.smokeOption=true;
  $scope.genderOption=true;
  $scope.spouseOption=false;
  $scope.smokeOption=false;
  $scope.spouseWorkOption=false;
  $scope.buyOption=false;



  $scope.yo=function(){
    console.log("yo");
    $scope.smokeOption = false;
  }
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





    

    var giSlider = document.getElementById('giSlider'),
    hmSlider = document.getElementById('hmSlider'),
    ipmSlider = document.getElementById('ipmSlider'),
    ccdSlider = document.getElementById('ccdSlider'),
    clSlider = document.getElementById('clSlider'),
    plSlider = document.getElementById('plSlider'),
    olSlider = document.getElementById('olSlider'),
    hvSlider = document.getElementById('hvSlider'),
    cabSlider = document.getElementById('cabSlider'),
    oiSlider = document.getElementById('oiSlider'),
    sbSlider = document.getElementById('sbSlider'),
    lifeSlider = document.getElementById('lifeSlider'),
    tpdSlider = document.getElementById('tpdSlider'),
    ipSlider = document.getElementById('ipSlider'),
    traumaSlider = document.getElementById('traumaSlider'),
    ncSlider = document.getElementById('ncSlider'),
    fcSlider = document.getElementById('fcSlider'),
    eeSlider = document.getElementById('eeSlider'),
    flSlider = document.getElementById('flSlider'),
    wiSlider = document.getElementById('wiSlider'),
    rrSlider = document.getElementById('rrSlider');
    vpSlider = document.getElementById('vpSlider'),
    mbSlider = document.getElementById('mbSlider');
    ageSpSlider = document.getElementById('ageSpSlider');
    incomeSpSlider = document.getElementById('incomeSpSlider');
    agC1Slider = document.getElementById('agC1Slider');
    agC2Slider = document.getElementById('agC2Slider');
    agC3Slider = document.getElementById('agC3Slider');
    agC4Slider = document.getElementById('agC4Slider');
    agC5Slider = document.getElementById('agC5Slider');
    agC6Slider = document.getElementById('agC6Slider');
    agC7Slider = document.getElementById('agC7Slider');
    agC8Slider = document.getElementById('agC8Slider');


    noUiSlider.create(giSlider, {
     start: [$scope.gi],
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

    noUiSlider.create(hmSlider, {
     start: [$scope.hm],
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

    noUiSlider.create(ipmSlider, {
     start: [$scope.ipm],
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

    noUiSlider.create(plSlider, {
     start: [$scope.pl],
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

    noUiSlider.create(ccdSlider, {
     start: [$scope.ccd],
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

    noUiSlider.create(clSlider, {
     start: [$scope.cl],
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

    noUiSlider.create(olSlider, {
     start: [$scope.ol],
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


    noUiSlider.create(hvSlider, {
     start: [$scope.hv],
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

    noUiSlider.create(cabSlider, {
     start: [$scope.cab],
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

    noUiSlider.create(oiSlider, {
     start: [$scope.oi],
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

    noUiSlider.create(sbSlider, {
     start: [$scope.sb],
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

    noUiSlider.create(lifeSlider, {
     start: [$scope.life],
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

    noUiSlider.create(tpdSlider, {
     start: [$scope.tpd],
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

    noUiSlider.create(ipSlider, {
     start: [$scope.ip],
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

    noUiSlider.create(traumaSlider, {
     start: [$scope.trauma],
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

    noUiSlider.create(ncSlider, {
     start: [$scope.nc],
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

    noUiSlider.create(fcSlider, {
     start: [$scope.fc],
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

    noUiSlider.create(eeSlider, {
     start: [$scope.ee],
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

    noUiSlider.create(flSlider, {
     start: [$scope.fl],
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

    noUiSlider.create(wiSlider, {
     start: [$scope.wi],
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

    noUiSlider.create(rrSlider, {
     start: [$scope.rr],
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

    noUiSlider.create(vpSlider, {
     start: [$scope.vp],
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

    noUiSlider.create(mbSlider, {
     start: [$scope.mb],
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

      noUiSlider.create(ageSpSlider, {
     start: [$scope.ageSp],
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

    noUiSlider.create(incomeSpSlider, {
     start: [$scope.incomeSp],
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

    noUiSlider.create(agC1Slider, {
     start: [$scope.agC1],
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
    noUiSlider.create(agC2Slider, {
     start: [$scope.agC2],
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
    noUiSlider.create(agC3Slider, {
     start: [$scope.agC3],
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
    noUiSlider.create(agC4Slider, {
     start: [$scope.agC4],
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
    noUiSlider.create(agC5Slider, {
     start: [$scope.agC5],
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
    noUiSlider.create(agC6Slider, {
     start: [$scope.agC6],
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
    noUiSlider.create(agC7Slider, {
     start: [$scope.agC7],
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
    noUiSlider.create(agC8Slider, {
     start: [$scope.agC8],
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
    giInput = document.getElementById('giInput'),
    hmInput = document.getElementById('hmInput'),
    ipmInput = document.getElementById('ipmInput'),
    ccdInput = document.getElementById('ccdInput'),
    clInput = document.getElementById('clInput'),
    plInput = document.getElementById('plInput'),
    olInput = document.getElementById('olInput'),
    hvInput = document.getElementById('hvInput'),
    cabInput = document.getElementById('cabInput'),
    oiInput = document.getElementById('oiInput'),
    sbInput = document.getElementById('sbInput'),
    lifeInput = document.getElementById('lifeInput'),
    tpdInput = document.getElementById('tpdInput'),
    ipInput = document.getElementById('ipInput'),
    traumaInput = document.getElementById('traumaInput'),
    ncInput = document.getElementById('ncInput'),
    fcInput = document.getElementById('fcInput'),
    eeInput = document.getElementById('eeInput'),
    flInput = document.getElementById('flInput'),
    wiInput = document.getElementById('wiInput'),
    rrInput = document.getElementById('rrInput');
    vpInput = document.getElementById('vpInput'),
    mbInput = document.getElementById('mbInput'),
    ageSpInput = document.getElementById('ageSpInput'),
    incomeSpInput = document.getElementById('incomeSpInput');
    agC1Input = document.getElementById('agC1Input');
    agC2Input = document.getElementById('agC2Input');
    agC3Input = document.getElementById('agC3Input');
    agC4Input = document.getElementById('agC4Input');
    agC5Input = document.getElementById('agC5Input');
    agC6Input = document.getElementById('agC6Input');
    agC7Input = document.getElementById('agC7Input');
    agC8Input = document.getElementById('agC8Input');


    function noChildren(num){
      for(var i=1;i<=num;i++){
       document.getElementsByClassName("c"+i)[0].style.display='block';
      }
      for(var i=(num+1);i<=8;i++){
        document.getElementsByClassName("c"+i)[0].style.display='none';
      }
    }
    
    giSlider.noUiSlider.on('update', function( values, handle ) {
    giInput.value = values[handle];
    $scope.gi = Number(values[handle]);
    });

    hmSlider.noUiSlider.on('update', function( values, handle ) {
    hmInput.value = values[handle];
    $scope.hm = Number(values[handle]);
    });

    ipmSlider.noUiSlider.on('update', function( values, handle ) {
    ipmInput.value = values[handle];
    $scope.ipm = Number(values[handle]);
    });

    ccdSlider.noUiSlider.on('update', function( values, handle ) {
    ccdInput.value = values[handle];
    $scope.ccd = Number(values[handle]);
    });

    clSlider.noUiSlider.on('update', function( values, handle ) {
    clInput.value = values[handle];
    $scope.cl = Number(values[handle]);
    });

    plSlider.noUiSlider.on('update', function( values, handle ) {
    plInput.value = values[handle];
    $scope.pl = Number(values[handle]);
    });

    olSlider.noUiSlider.on('update', function( values, handle ) {
    olInput.value = values[handle];
    $scope.ol = Number(values[handle]);
    });

    hvSlider.noUiSlider.on('update', function( values, handle ) {
    hvInput.value = values[handle];
    $scope.hv = Number(values[handle]);
    });

    cabSlider.noUiSlider.on('update', function( values, handle ) {
    cabInput.value = values[handle];
    $scope.cab = Number(values[handle]);
    });

    oiSlider.noUiSlider.on('update', function( values, handle ) {
    oiInput.value = values[handle];
    $scope.oi = Number(values[handle]);
    });

    sbSlider.noUiSlider.on('update', function( values, handle ) {
    sbInput.value = values[handle];
    $scope.sb = Number(values[handle]);
    });

    lifeSlider.noUiSlider.on('update', function( values, handle ) {
    lifeInput.value = values[handle];
    $scope.life = Number(values[handle]);
    });

    tpdSlider.noUiSlider.on('update', function( values, handle ) {
    tpdInput.value = values[handle];
    $scope.tpd = Number(values[handle]);
    });

    ipSlider.noUiSlider.on('update', function( values, handle ) {
    ipInput.value = values[handle];
    $scope.ip = Number(values[handle]);
    });

    traumaSlider.noUiSlider.on('update', function( values, handle ) {
    traumaInput.value = values[handle];
    $scope.trauma = Number(values[handle]);
    });

    ncSlider.noUiSlider.on('update', function( values, handle ) {
    ncInput.value = values[handle];
    $scope.nc = Number(values[handle]);
    noChildren($scope.nc);
    });


    fcSlider.noUiSlider.on('update', function( values, handle ) {
    fcInput.value = values[handle];
    $scope.fc = Number(values[handle]);
    });

    eeSlider.noUiSlider.on('update', function( values, handle ) {
    eeInput.value = values[handle];
    $scope.ee = Number(values[handle]);
    });

    flSlider.noUiSlider.on('update', function( values, handle ) {
    flInput.value = values[handle];
    $scope.fl = Number(values[handle]);
    });

    wiSlider.noUiSlider.on('update', function( values, handle ) {
    wiInput.value = values[handle];
    $scope.wi = Number(values[handle]);
    });

    rrSlider.noUiSlider.on('update', function( values, handle ) {
    rrInput.value = values[handle];
    $scope.rr = Number(values[handle]);
    });

    vpSlider.noUiSlider.on('update', function( values, handle ) {
    vpInput.value = values[handle];
    $scope.vp = Number(values[handle]);
    });

    mbSlider.noUiSlider.on('update', function( values, handle ) {
    mbInput.value = values[handle];
    $scope.mb = Number(values[handle]);
    });

    ageSpSlider.noUiSlider.on('update', function( values, handle ) {
    ageSpInput.value = values[handle];
    $scope.ageSp = Number(values[handle]);
    });

    incomeSpSlider.noUiSlider.on('update', function( values, handle ) {
    incomeSpInput.value = values[handle];
    $scope.incomeSp = Number(values[handle]);
    });

    agC1Slider.noUiSlider.on('update', function( values, handle ) {
    agC1Input.value = values[handle];
    $scope.agC1 = Number(values[handle]);
    });
    agC2Slider.noUiSlider.on('update', function( values, handle ) {
    agC2Input.value = values[handle];
    $scope.agC2 = Number(values[handle]);
    });
    agC3Slider.noUiSlider.on('update', function( values, handle ) {
    agC3Input.value = values[handle];
    $scope.agC3 = Number(values[handle]);
    });
    agC4Slider.noUiSlider.on('update', function( values, handle ) {
    agC4Input.value = values[handle];
    $scope.agC4 = Number(values[handle]);
    });
    agC5Slider.noUiSlider.on('update', function( values, handle ) {
    agC5Input.value = values[handle];
    $scope.agC5 = Number(values[handle]);
    });
    agC6Slider.noUiSlider.on('update', function( values, handle ) {
    agC6Input.value = values[handle];
    $scope.agC6 = Number(values[handle]);
    });
    agC7Slider.noUiSlider.on('update', function( values, handle ) {
    agC7Input.value = values[handle];
    $scope.agC7 = Number(values[handle]);
    });
    agC8Slider.noUiSlider.on('update', function( values, handle ) {
    agC8Input.value = values[handle];
    $scope.agC8 = Number(values[handle]);
    });

    ncInput.addEventListener("change",function(){
      ncSlider.noUiSlider.set($scope.nc);
      noChildren($scope.nc);
    })


    giSlider.noUiSlider.on('set', function( values, handle ) {
    giInput.value = values[handle];
    $scope.gi = Number(values[handle]);
    });

    hmSlider.noUiSlider.on('set', function( values, handle ) {
    hmInput.value = values[handle];
    $scope.hm = Number(values[handle]);
    });

    ipmSlider.noUiSlider.on('set', function( values, handle ) {
    ipmInput.value = values[handle];
    $scope.ipm = Number(values[handle]);
    });

    ccdSlider.noUiSlider.on('set', function( values, handle ) {
    ccdInput.value = values[handle];
    $scope.ccd = Number(values[handle]);
    });

    clSlider.noUiSlider.on('set', function( values, handle ) {
    clInput.value = values[handle];
    $scope.cl = Number(values[handle]);
    });

    plSlider.noUiSlider.on('set', function( values, handle ) {
    plInput.value = values[handle];
    $scope.pl = Number(values[handle]);
    });

    olSlider.noUiSlider.on('set', function( values, handle ) {
    olInput.value = values[handle];
    $scope.ol = Number(values[handle]);
    });

    hvSlider.noUiSlider.on('set', function( values, handle ) {
    hvInput.value = values[handle];
    $scope.hv = Number(values[handle]);
    });

    cabSlider.noUiSlider.on('set', function( values, handle ) {
    cabInput.value = values[handle];
    $scope.cab = Number(values[handle]);
    });

    oiSlider.noUiSlider.on('set', function( values, handle ) {
    oiInput.value = values[handle];
    $scope.oi = Number(values[handle]);
    });

    sbSlider.noUiSlider.on('set', function( values, handle ) {
    sbInput.value = values[handle];
    $scope.sb = Number(values[handle]);
    });

    lifeSlider.noUiSlider.on('set', function( values, handle ) {
    lifeInput.value = values[handle];
    $scope.life = Number(values[handle]);
    });

    tpdSlider.noUiSlider.on('set', function( values, handle ) {
    tpdInput.value = values[handle];
    $scope.tpd = Number(values[handle]);
    });

    ipSlider.noUiSlider.on('set', function( values, handle ) {
    ipInput.value = values[handle];
    $scope.ip = Number(values[handle]);
    });

    traumaSlider.noUiSlider.on('set', function( values, handle ) {
    traumaInput.value = values[handle];
    $scope.trauma = Number(values[handle]);
    });

    ncSlider.noUiSlider.on('set', function( values, handle ) {
    ncInput.value = values[handle];
    $scope.nc = Number(values[handle]);
    });


    fcSlider.noUiSlider.on('set', function( values, handle ) {
    fcInput.value = values[handle];
    $scope.fc = Number(values[handle]);
    });

    eeSlider.noUiSlider.on('set', function( values, handle ) {
    eeInput.value = values[handle];
    $scope.ee = Number(values[handle]);
    });

    flSlider.noUiSlider.on('set', function( values, handle ) {
    flInput.value = values[handle];
    $scope.fl = Number(values[handle]);
    });

    wiSlider.noUiSlider.on('set', function( values, handle ) {
    wiInput.value = values[handle];
    $scope.wi = Number(values[handle]);
    });

    rrSlider.noUiSlider.on('set', function( values, handle ) {
    rrInput.value = values[handle];
    $scope.rr = Number(values[handle]);
    });

    vpSlider.noUiSlider.on('set', function( values, handle ) {
    vpInput.value = values[handle];
    $scope.vp = Number(values[handle]);
    });

    mbSlider.noUiSlider.on('set', function( values, handle ) {
    mbInput.value = values[handle];
    $scope.mb = Number(values[handle]);
    });

    ageSpSlider.noUiSlider.on('set', function( values, handle ) {
    ageSpInput.value = values[handle];
    $scope.ageSp = Number(values[handle]);
    });

    incomeSpSlider.noUiSlider.on('set', function( values, handle ) {
    incomeSpInput.value = values[handle];
    $scope.incomeSp = Number(values[handle]);
    });


    agC1Slider.noUiSlider.on('set', function( values, handle ) {
    agC1Input.value = values[handle];
    $scope.agC1 = Number(values[handle]);
    });
    agC2Slider.noUiSlider.on('set', function( values, handle ) {
    agC2Input.value = values[handle];
    $scope.agC2 = Number(values[handle]);
    });
    agC3Slider.noUiSlider.on('set', function( values, handle ) {
    agC3Input.value = values[handle];
    $scope.agC3 = Number(values[handle]);
    });
    agC4Slider.noUiSlider.on('set', function( values, handle ) {
    agC4Input.value = values[handle];
    $scope.agC4 = Number(values[handle]);
    });
    agC5Slider.noUiSlider.on('set', function( values, handle ) {
    agC5Input.value = values[handle];
    $scope.agC5 = Number(values[handle]);
    });
    agC6Slider.noUiSlider.on('set', function( values, handle ) {
    agC6Input.value = values[handle];
    $scope.agC6 = Number(values[handle]);
    });
    agC7Slider.noUiSlider.on('set', function( values, handle ) {
    agC7Input.value = values[handle];
    $scope.agC7 = Number(values[handle]);
    });
    agC8Slider.noUiSlider.on('set', function( values, handle ) {
    agC8Input.value = values[handle];
    $scope.agC8 = Number(values[handle]);
    });
}]);

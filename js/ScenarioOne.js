app.service('ScenarioOne', [function(){
 
    this.calculate = function(asset,liability,PVExpenseLife,PVExpenseTPD,IP1,IP2,Trauma1,Trauma2,
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

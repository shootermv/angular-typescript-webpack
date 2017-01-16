import {ManageApplicationsService} from './../manageApplicationsService'
class Ctrl {
   public showTestGroup:boolean;  
   public static $inject:string[] = ['manageApplicationsService'];
   public activeValues:any;
   public byParam:any = '14';
   public dataList:Object = {14:'Hostname',1:'Username',18:'Business Location'};
   constructor(public manageApplicationsService:ManageApplicationsService){}


   $onInit() {
      this.manageApplicationsService.findBySearchCriteria()
      .then((response:any) => {
        this.activeValues = response.data.values;
      });
   }

   closeDialog() {
       this.showTestGroup = false;
   }

   byParamChanged(val) {
        
   }
};
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = Ctrl;
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

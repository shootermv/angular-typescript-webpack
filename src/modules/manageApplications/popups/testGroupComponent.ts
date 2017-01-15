import {ManageApplicationsService} from './../manageApplicationsService'
class Ctrl {
   public showTestGroup:boolean;  
   public static $inject:string[] = ['manageApplicationsService'];
   public activeValues:any;
   constructor(public manageApplicationsService:ManageApplicationsService){

   }

   $onInit() {
      this.manageApplicationsService.findBySearchCriteria()
      .then((response:any) => {
        this.activeValues = response.data.values.slice(0,5);
      });
   }

   closeDialog() {
       this.showTestGroup = false;
    }
};
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = Ctrl;
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

import {TestGroupService} from './../core/services/testGroupService'
class Ctrl {
   public showTestGroup:boolean;  
   public static $inject:string[] = ['testGroupService'];
   public activeValues:any[] = [];
   public toSaved:any[] = [];
   public byParam:any = '14';
   public dataList:Object = {14:'Hostname',1:'Username',18:'Business Location'};
   constructor(public testGroupService:TestGroupService){}

   
   $onInit() {
      this.byParamChanged(14);
   }

   closeDialog() {
       this.showTestGroup = false;
   }

   byParamChanged(val) {      
       this.testGroupService.findBySearchCriteria(val)
      .then((response:any) => {
        this.activeValues = response.data.values.map(val=>{
            let obj = {value:val, $selected : false};
            return obj;
        });     
      });       
   }

   move(orig, current) {
      orig.filter(b=>b.$selected).forEach(item=>{
          current.unshift(item);
          orig.splice(orig.indexOf(item),1);
      }) 
   }


   moveToSaved() {
      this.move(this.activeValues, this.toSaved)      
   }

   moveToActive() {
     this.move(this.toSaved, this.activeValues)   
   }

};
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = Ctrl;
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

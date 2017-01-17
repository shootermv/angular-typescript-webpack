import {TestGroupService} from './../core/services/testGroupService'
class Ctrl {
   public showTestGroup:boolean;  
   public static $inject:string[] = ['testGroupService'];
   public activeValues:any[] = [];
   public toSaved:any[] = [];
   public byParam:any = '14';
   public testGroupVersion:number;
   public dataList:Object = {14:'Hostname',1:'Username',18:'Business Location'};

   private criterion:Object = {
        "staticAttrId": 0,
        "criterionValues": []
    }




   constructor(public testGroupService:TestGroupService){}

   
   $onInit() {

     this.testGroupService.loadAccountTestGroup(1)
     .then((response)=>{

        this.testGroupVersion = response.data.version; 
        this.byParamChanged(response.data.staticAttrCriterionDTOList[0].staticAttrId);

        this.toSaved = response.data.staticAttrCriterionDTOList[0].criterionValues.map(val=>{
           return {value:val, $selected : false};
        })
     })



      
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

   saveTestGroup() {
      this.criterion["staticAttrId"] = this.byParam;
      this.criterion["criterionValues"] = this.toSaved.map(item => item.value)
      this.testGroupService.saveTestGroup(1, this.criterion, this.testGroupVersion);
   }
   
};
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = Ctrl;
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

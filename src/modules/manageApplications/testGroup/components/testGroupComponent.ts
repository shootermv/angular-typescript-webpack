import {TestGroupService} from './../core/services/testGroupService';
import {Criterion} from './../core/entities/criterion';
class Ctrl {
   public showTestGroup:boolean;  
   public static $inject:string[] = ['testGroupService'];
   public activeValues:any[] = [];
   public toSaved:any[] = [];
   public byParam:any = '14';
   public testGroupVersion:number;
   public dataList:Object = {14:'Hostname',1:'Username',18:'Business Location'};
   public criterion:Criterion;
   public criterionData:Object; 

   constructor(public testGroupService:TestGroupService){}
   
   $onInit() {

     this.testGroupService.loadAccountTestGroup(1)
     .then((response)=>{

        this.testGroupVersion = response.data.version; 
        this.criterion =  new Criterion(response.data.staticAttrCriterionDTOList[0].staticAttrId, response.data.staticAttrCriterionDTOList[0].criterionValues);
        this.byParamChanged(response.data.staticAttrCriterionDTOList[0].staticAttrId);
        this.toSaved = this.criterion.criterionValues.map(val=>{
           return {value:val, $selected : false};
        })
     });
      
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
      this.criterionData= {
          staticAttrId: this.byParam,
          criterionValues:this.toSaved.map(item => item.value)
      };
      this.testGroupService.saveTestGroup(1, this.criterionData, this.testGroupVersion);
   }
   
};
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = Ctrl;
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

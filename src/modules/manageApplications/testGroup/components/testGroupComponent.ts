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

   constructor(public testGroupService:TestGroupService){}
   
   $onInit() {
   
     this.testGroupService.loadAccountTestGroup(1)
     .then((response)=>{
        this.testGroupVersion = response.version; 
        this.criterion =  response.criterion;
        this.byParamChanged(this.criterion.staticAttrId);
        this.toSaved = this.criterion.criterionValues.map(val=>{
           return {value:val, $selected : false};
        })
     });
      
   }

   public closeDialog() {
       this.showTestGroup = false;
   }

   public byParamChanged(val) {    
       this.testGroupService.findBySearchCriteria(val)
      .then((response:any) => {
        this.activeValues = response.data.values.map(val=>{
            let obj = {value:val, $selected : false};
            return obj;
        });    
      });       
   }

   private move(orig, current) {
      orig.filter(b=>b.$selected).forEach(item=>{
          current.unshift(item);
          orig.splice(orig.indexOf(item),1);
      }) 
   }

   public moveToSaved() {
      this.move(this.activeValues, this.toSaved)      
   }

   public moveToActive() {
     this.move(this.toSaved, this.activeValues)   
   }

   public saveTestGroup() {
      let criterionData = new Criterion(
          this.criterion.staticAttrId,
          this.toSaved.map(item => item.value)
      );
      this.testGroupService.saveTestGroup(1, criterionData, this.testGroupVersion);
   }
   
};
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = Ctrl;
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

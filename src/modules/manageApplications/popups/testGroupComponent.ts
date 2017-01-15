
class Ctrl {
   public showTestGroup:boolean;  
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

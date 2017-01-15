
export class TestGroup implements ng.IComponentOptions {
    public template:string = require('./testGroupComponent.html');
    public controller:any  = class Ctrl {
        public showTestGroup:boolean;  
        closeDialog() {
            this.showTestGroup = false;
        }
    };
    public bindings:{[key:string]:string} = {
        showTestGroup: '='
    };
}

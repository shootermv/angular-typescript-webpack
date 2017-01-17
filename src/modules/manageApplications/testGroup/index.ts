import * as angular from "angular";
   
import {TestGroup} from './components/testGroupComponent';  
import {TestGroupService} from './core/services/testGroupService';
angular.module("app.testGroup",[])   
   .service('testGroupService', TestGroupService)
   .component("testGroup", new TestGroup())
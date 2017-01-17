import * as angular from "angular";
   
import {TestGroup} from './components/testGroupComponent'  
angular.module("app.testGroup",[])   
   .component("testGroup", new TestGroup())
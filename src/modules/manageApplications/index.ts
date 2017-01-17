import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {ManageApplicationsService} from "./manageApplicationsService"
import {ManageApplicationsCtrl} from './manageAppsCtrl'
import {ContextMenuApplications} from './contextMenu/bulkMenu'
import {TestGroup} from './TestGroup/components/testGroupComponent'
import {AddApplication} from './contextMenu/addApplication'

angular.module('app.manageApplications', ["ngRoute"])
   .service('manageApplicationsService', ManageApplicationsService)
   .controller('manageApplicationsCtrl',ManageApplicationsCtrl)
   .component('contextMenuApplications', new ContextMenuApplications())
   .component('addApplicationMenu', new AddApplication())
   .component('testGroup', new TestGroup())
   .config(routesConfig)
 
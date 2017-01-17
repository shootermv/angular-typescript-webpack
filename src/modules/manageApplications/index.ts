import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {ManageApplicationsService} from "./manageApplicationsService"
import {ManageApplicationsCtrl} from './manageAppsCtrl'
import {ContextMenuApplications} from './contextMenu/bulkMenu'
import {AddApplication} from './contextMenu/addApplication'
import "./testGroup/index"
angular.module('app.manageApplications', ["ngRoute", "app.testGroup"])
   .service('manageApplicationsService', ManageApplicationsService)
   .controller('manageApplicationsCtrl',ManageApplicationsCtrl)
   .component('contextMenuApplications', new ContextMenuApplications())
   .component('addApplicationMenu', new AddApplication())
   .config(routesConfig)
 
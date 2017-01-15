
import {ManageApplicationsService} from './../manageApplicationsService'
config.$inject = ["$routeProvider"];

export function config($routeProvider: ng.route.IRouteProvider): void {
     let getMetaData:any = ['manageApplicationsService',
         (manageApplicationsService:ManageApplicationsService)=>{
           return  manageApplicationsService.getMetaData();
         }
     ] 
     let resolve:any = {
         getMetaData:getMetaData
     }

    $routeProvider.when("/manageapplications", {
        template: require("./../manageApplications.html"),
        controller:'manageApplicationsCtrl',
        controllerAs:'$ctrl',
        resolve:resolve
    })
    .otherwise({ redirectTo: '/manageapplications' });
}
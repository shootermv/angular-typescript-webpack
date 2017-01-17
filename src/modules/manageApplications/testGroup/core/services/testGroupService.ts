import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IHttpPromise = angular.IHttpPromise;
import IQService = angular.IQService;

import {Criterion} from './../entities/criterion'
export class TestGroupService {
    static $inject:string[] = ["$http", "$q"];
    constructor(private $http:IHttpService, private $q:IQService) {}
    public loadAccountTestGroup(accountId):IPromise<any> {
        return this.$http.get('/api/testGroups/testGroup?accountId=' + accountId).then((response)=>{
            let r = response.data["staticAttrCriterionDTOList"][0];
            let data:Object = {
                version: response.data["version"],
                criterion: new Criterion(r.staticAttrId, r.criterionValues)
            };
            return data;
        })
    }    
    public findBySearchCriteria(saId):IPromise<any>{
        return this.$http.get('/api/testGroups/findBySearchCriteria?accountId=' + 1+'&query=&saId='+saId); 
    }
    public saveTestGroup (accountId, dataObj, version):IPromise<any> {
        return this.$http.post('/api/testGroups/saveOrUpdateTestGroup?accountId=' + encodeURIComponent(accountId)
                        + '&version=' + encodeURIComponent(version), dataObj) ;
    }    
}

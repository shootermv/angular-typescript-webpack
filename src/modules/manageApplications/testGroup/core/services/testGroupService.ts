import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IHttpPromise = angular.IHttpPromise;
import IQService = angular.IQService;


export class TestGroupService {


    static $inject:string[] = ["$http", "$q"];

    constructor(private $http:IHttpService, private $q:IQService) {}
    
    public findBySearchCriteria(saId):IPromise<any>{
        return  this.$http.get('/api/testGroups/findBySearchCriteria?accountId=' + 1+'&query=&saId='+saId); 
    }
}

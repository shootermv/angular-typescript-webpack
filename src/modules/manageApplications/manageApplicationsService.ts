
    import IHttpService = angular.IHttpService;
    import IPromise = angular.IPromise;
    import IHttpPromise = angular.IHttpPromise;
    import IQService = angular.IQService;
    import IDeferred = angular.IDeferred;
    import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;


    export class ManageApplicationsService {


        static $inject:string[] = ["$http", "$q"];

        constructor(private $http:IHttpService, private $q:IQService) {
        }



        public getMetaData():IPromise<any> {
            return this.$http.get('/api/appView/appTree');
        }


    }


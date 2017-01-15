import {ManageApplicationsService} from './manageApplicationsService'
export class ManageApplicationsCtrl {
    public static $inject:string[] = ['getMetaData','manageApplicationsService']
    public containerMetadata:any[]
    
    
    constructor(public getMetaData:any, public manageApplicationsService:ManageApplicationsService){
      this.containerMetadata = this.getMetaData.data.containers;
      console.log(this.containerMetadata)
    }




}
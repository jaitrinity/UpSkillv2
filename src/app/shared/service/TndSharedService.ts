import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from '../constant/Contant';

@Injectable()
export class TndSharedService{

    // private serviceEndPoint;
    private phpServicePoint;
    constructor(private http:Http){
        // this.serviceEndPoint = Constant.tndBaseURL;
        this.phpServicePoint = Constant.phpServerURL;
    }

    public saveChanges(jsonData: any) {
        return this.http.post(this.phpServicePoint+'changeEmpMobile.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.post(this.serviceEndPoint+"changeEmpMobile",sendJson,options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public assignTraining(sendJson: any) {
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.post(this.serviceEndPoint+"assignTaskList",sendJson,options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        let bodyString = JSON.stringify(sendJson);
        return this.http.post(this.phpServicePoint+'assignTaskList.php',bodyString)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getDistinctSubTrainingName(sendJson: any) {
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.post(this.serviceEndPoint+"getDistinctSubTrainingName",sendJson,options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        let bodyString = JSON.stringify(sendJson);
        return this.http.post(this.phpServicePoint+'getDistinctSubTrainingName.php',bodyString)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getQuestionType(){
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.get(this.serviceEndPoint+'getQuestionType',options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return this.http.get(this.phpServicePoint+'getQuestionType.php')
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getMediaType() {
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.get(this.serviceEndPoint+'getAllMediaType',options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return this.http.get(this.phpServicePoint+'getAllMediaType.php')
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getLanguageList(){
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.get(this.serviceEndPoint+'language',options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return this.http.get(this.phpServicePoint+'language.php')
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getOrganizationData(jsonStr){
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.post(this.serviceEndPoint+'getOrganizationData',jsonStr,options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        let jsonData = JSON.stringify(jsonStr);
        return this.http.post(this.phpServicePoint+'getOrganizationData.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public submitTraining(jsonStr){
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.post(this.serviceEndPoint+"createTraining",jsonStr,options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        let jsonData = JSON.stringify(jsonStr);
        return this.http.post(this.phpServicePoint+'createTraining.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // public getUserCircleZoneCluster(jsonStr : any){
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     return this.http.post(Constant.serverURL+'getUserLoginCircleZoneCluster',jsonStr,options)
    //             .map((response:Response) => response.json())
    //             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

    public trainingNameByCircleAbbr(queryParam : any){
        // let headers = new Headers({'Content-Type':'application/json'});
        // headers.append("Access-Control-Allow-Origin", "*");
        // let options = new RequestOptions({ headers:headers });
        // return this.http.get(this.serviceEndPoint+'getTrainingNameByCircleName/'+circleAbbr,options)
        //         .map((response:Response) => response.json())
        //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return this.http.get(this.phpServicePoint+'getTrainingNameByCircleName.php?'+queryParam)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    // public exportSubmittedFeedbackData(){
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     return this.http.get(this.serviceEndPoint+'getSubmitedFeedbackData',options)
    //             .map((response:Response) => response.json())
    //             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

    // public exportAppInstallmentReport(sendJson : any){
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     return this.http.post(this.serviceEndPoint+'exportAppInstallmentReport',sendJson,options)
    //             .map((response:Response) => response.json())
    //             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

    // public exportPoshMuduleReport(){
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     return this.http.get(this.serviceEndPoint+'exportPoshMuduleReport',options)
    //             .map((response:Response) => response.json())
    //             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

    // public exportBehavioralModuleReport() {
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     return this.http.get(this.serviceEndPoint+'exportBehavioralModuleReport',options)
    //             .map((response:Response) => response.json())
    //             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

    // public getTokanNumber(username: string, password: string) {
    //     let tempUrl = "http://www.in3.co.in:4125/moodle/login/token.php?username="+username+"&password="+password+"&service=moodle_mobile_app";
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     let options = new RequestOptions({ headers:headers });
    //     return this.http.get(tempUrl,options)
    //             .map((response:Response) => response.json())
    //             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

    public getTrainingName(queryParam : any) {
        return this.http.get(this.phpServicePoint+'getTrainingName.php?'+queryParam)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getDataBySelectType(jsonData: any, selectType : string) {
        return this.http.post(this.phpServicePoint+'getAllList.php?selectType='+selectType,jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getFeedbackReport(jsonStr){
        let jsonData = JSON.stringify(jsonStr);
        return this.http.post(this.phpServicePoint+'getFeedbackReport.php',jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
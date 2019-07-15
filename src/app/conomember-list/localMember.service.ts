import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Member } from './member';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class LocalMemberService {

  constructor(private http: HttpClient ) { 
  }
  member : Member;


//private remoteService: RemoteService
  getMembers(): Observable<Member[]> {
   
    //let baseURL = 'https://www.domain.com/iMIS';
    let baseURL = 'https://api.domain.com/Asi.Scheduler_IMIS';
    
    let url = baseURL + '/api/IQA?QueryName=$/ContactManagement/DefaultSystem/Queries/Contacts/Default&limit=1000';

   //let authToken = 'bearer ....';
    let authToken = (document.getElementById('__RequestVerificationToken') as HTMLInputElement).value;
  
      return this.http.get(url, {headers: { 'Authorization': authToken }})
        .map((res:any)=> {
          console.log(res.Items[0]);
        let results = res.Items.$values.map ( item => {
            return new Member(
             
              item.Properties.$values[2].Value,
              item.Properties.$values[3].Value,
              item.Properties.$values[4].Value,
              item.Properties.$values[5].Value,
              item.Properties.$values[7].Value,
         
                )
        });
        return results;
    });

}
  
}

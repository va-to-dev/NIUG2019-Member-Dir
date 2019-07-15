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
   
    //let baseURL = 'https://portalapi.visualantidote.com/TestPortal';
    let baseURL = 'https://portalapi.visualantidote.com/Asi.Scheduler_TestPortal';
    let url = baseURL + '/api/IQA?QueryName=$/ContactManagement/DefaultSystem/Queries/Contacts/Default&limit=1000';

   let authToken = 'bearer 3hFYeMWKVbdY8tWX6YxUV3onbrm08IkEMQFh3QLL56KGrClp21lNpJXcXQ-HFNhiNzgKXlQ6d_vWHR6zwqdnSLT0VOVjGZPUlFrevtf4Xbc7Ile5yZD8lcsOtyhgFoECMcu0AQsVlrU32e1MtDvt9c1GQBXDrv6oy03VCg5Ff3zHVlLargQtBGAxyDOPH0MjMqAukMsmypZW8RuWKVwdgq4vG2xHKug7lMl33n7rJaBCOBdmtSM5dqJR-owO_5hwMO-aYZ7lMmPItqMMZlhpBSEQ26KUdZt-vS2vIL5L6EJDCe_WAmJTpjlSaJi7OfJYVFfhi3A2waHyK52EOJnWAoP9-dJTGEz3nMX3Pb_mcAmvaE-Fb3ck3Kea99zrEweU_rKofc9C9A9wbyL8aUQrHYSfD-Zlmdd_mZvvesnta7SmFVhXf5_LMZ1fW5OloBfYheFVZbfTmEr3G8LGGGRPdN3SQSlVF8by4_GxCvLNmtyvOnPLcPBVFCEQrxA_GUoZ2YG4s4TMkRwyWXR0gS8U__i3SlSZxPwBB6HaRFKeC5h5y5CwFrAhlniBYdUbLPS4b9MOPRjuJGJHZg1NZc8ot3EqQhh00KJ04v7IxW1d9DnhDA5xVmZELuNFWgEvyJOtSrwBl8Kv6kUaN91eWVxe4SBLSP9TMJ1HjQaEFLDrfaEautiEfera-rAH4U972RfaLt0z5dsyBrhuTu_ZuC_-mvAq6BuYIzoP3MIYTmo2HWRGGo4oo6bYXIhi_nMmhqnnbORppaz1MISMXE0NG8JEMObbG3lXU3BwYPqE-xOZYIM81eVaDH4rb5XtfKIYa4Lfr63AZeU7bElVRrz0A0RWAoHE-XtTDULT_EkyBmivE7QTo_oNVg05iefzs0xQm9qBm7zdR_rT1vxqhmZ4QgGkuoc8m5mKUmA-GUvP1j-q4Pxpm6aOZYpmPygMzQIEdxs1wrJc_yWpaKyR9DA6NAnpx_IIGRXUiMiQG9WJOxJCQQG0k7IIP7N-Dgfw2T2w7V9R84yq4SlKFD34_v5SVx5MYg';
   // let authToken = (document.getElementById('__RequestVerificationToken') as HTMLInputElement).value;
  
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

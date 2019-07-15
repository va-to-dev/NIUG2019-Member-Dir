export class Member {

    
    fullName:string;
    fullAddress:string;
    company: string;
     email:string;
     iMISID: string;
     
     constructor(  fullName:string, fullAddress:string, company:string, email:string , iMISID:string) {
        
       
        this.fullName = fullName;
        this.fullAddress = fullAddress;
        this.company=company;
        this.email = email;
        this.iMISID =iMISID;

     }
}


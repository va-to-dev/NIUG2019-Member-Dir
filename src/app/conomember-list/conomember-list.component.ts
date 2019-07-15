import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {LocalMemberService} from './localMember.service';
import { FilterPipe }from '../filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Member } from './member';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-conomember-list',
  templateUrl: './conomember-list.component.html',
  styleUrls: ['./conomember-list.component.scss']
})
export class ConomemberListComponent implements OnInit {

  title ="Members Directory";

  constructor(private localMemberService:LocalMemberService) { 
    
  }
  members: Member[];

  ngOnInit() {
    this.getMembers()
  }

  getMembers(): void {
    this.localMemberService.getMembers()
        .subscribe(data => this.members = data);

  }


}

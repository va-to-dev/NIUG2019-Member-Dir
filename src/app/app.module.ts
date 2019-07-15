import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppComponent } from './app.component';
import { FilterPipe} from './filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { LocationPipePipe } from './location-pipe.pipe';
import { Headers, Http } from '@angular/http';
import { LocalMemberService } from './conomember-list/localMember.service';
import { ConomemberListComponent } from './conomember-list/conomember-list.component';
import { NameFilterPipe } from './conomember-list/nameFilter.pipe';

import { OrderBy } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LocationPipePipe,
    ConomemberListComponent ,
    NameFilterPipe,
    OrderBy,
    
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ LocalMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConomemberListComponent } from './conomember-list.component';

describe('ConomemberListComponent', () => {
  let component: ConomemberListComponent;
  let fixture: ComponentFixture<ConomemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConomemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConomemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

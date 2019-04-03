import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderListComponent } from './sender-list.component';

describe('SenderListComponent', () => {
  let component: SenderListComponent;
  let fixture: ComponentFixture<SenderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

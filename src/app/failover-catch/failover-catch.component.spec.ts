import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailoverCatchComponent } from './failover-catch.component';

describe('FailoverCatchComponent', () => {
  let component: FailoverCatchComponent;
  let fixture: ComponentFixture<FailoverCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailoverCatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailoverCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

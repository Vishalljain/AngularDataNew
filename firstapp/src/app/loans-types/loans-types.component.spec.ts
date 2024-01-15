import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansTypesComponent } from './loans-types.component';

describe('LoansTypesComponent', () => {
  let component: LoansTypesComponent;
  let fixture: ComponentFixture<LoansTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferncesComponent } from './prefernces.component';

describe('PreferncesComponent', () => {
  let component: PreferncesComponent;
  let fixture: ComponentFixture<PreferncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferncesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

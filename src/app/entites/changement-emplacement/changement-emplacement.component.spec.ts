import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementEmplacementComponent } from './changement-emplacement.component';

describe('ChangementEmplacementComponent', () => {
  let component: ChangementEmplacementComponent;
  let fixture: ComponentFixture<ChangementEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

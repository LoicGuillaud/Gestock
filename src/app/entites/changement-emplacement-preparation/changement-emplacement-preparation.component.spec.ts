import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementEmplacementPreparationComponent } from './changement-emplacement-preparation.component';

describe('ChangementEmplacementPreparationComponent', () => {
  let component: ChangementEmplacementPreparationComponent;
  let fixture: ComponentFixture<ChangementEmplacementPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementEmplacementPreparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementEmplacementPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

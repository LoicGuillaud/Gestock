import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeManuelleComponent } from './entree-manuelle.component';

describe('EntreeManuelleComponent', () => {
  let component: EntreeManuelleComponent;
  let fixture: ComponentFixture<EntreeManuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreeManuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreeManuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

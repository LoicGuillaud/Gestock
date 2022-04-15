import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneListeAServirComponent } from './ligne-liste-a-servir.component';

describe('LigneListeAServirComponent', () => {
  let component: LigneListeAServirComponent;
  let fixture: ComponentFixture<LigneListeAServirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneListeAServirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneListeAServirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneEtatStockComponent } from './ligne-etat-stock.component';

describe('LigneEtatStockComponent', () => {
  let component: LigneEtatStockComponent;
  let fixture: ComponentFixture<LigneEtatStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneEtatStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneEtatStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertStockComponent } from './transfert-stock.component';

describe('TransfertStockComponent', () => {
  let component: TransfertStockComponent;
  let fixture: ComponentFixture<TransfertStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

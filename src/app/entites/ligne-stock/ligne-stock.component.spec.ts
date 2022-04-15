import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneStockComponent } from './ligne-stock.component';

describe('LigneStockComponent', () => {
  let component: LigneStockComponent;
  let fixture: ComponentFixture<LigneStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

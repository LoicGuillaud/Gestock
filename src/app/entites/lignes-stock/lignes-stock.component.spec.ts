import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LignesStockComponent } from './lignes-stock.component';

describe('LignesStockComponent', () => {
  let component: LignesStockComponent;
  let fixture: ComponentFixture<LignesStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LignesStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LignesStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

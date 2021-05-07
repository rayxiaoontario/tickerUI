import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerPoolComponent } from './ticker-pool.component';

describe('TickerPoolComponent', () => {
  let component: TickerPoolComponent;
  let fixture: ComponentFixture<TickerPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricCurrencyComponent } from './metric-currency.component';

describe('MetricCurrencyComponent', () => {
  let component: MetricCurrencyComponent;
  let fixture: ComponentFixture<MetricCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

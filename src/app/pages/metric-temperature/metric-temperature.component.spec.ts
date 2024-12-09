import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricTemperatureComponent } from './metric-temperature.component';

describe('MetricTemperatureComponent', () => {
  let component: MetricTemperatureComponent;
  let fixture: ComponentFixture<MetricTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricTemperatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

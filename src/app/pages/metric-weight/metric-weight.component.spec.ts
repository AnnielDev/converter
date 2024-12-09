import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricWeightComponent } from './metric-weight.component';

describe('MetricWeightComponent', () => {
  let component: MetricWeightComponent;
  let fixture: ComponentFixture<MetricWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricWeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

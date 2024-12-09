import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricTimeComponent } from './metric-time.component';

describe('MetricTimeComponent', () => {
  let component: MetricTimeComponent;
  let fixture: ComponentFixture<MetricTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

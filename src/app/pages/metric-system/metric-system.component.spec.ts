import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricSystemComponent } from './metric-system.component';

describe('MetricSystemComponent', () => {
  let component: MetricSystemComponent;
  let fixture: ComponentFixture<MetricSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

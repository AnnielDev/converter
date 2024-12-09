import { Component } from '@angular/core';

@Component({
  selector: 'app-metric-temperature',
  standalone: true,
  imports: [],
  templateUrl: './metric-temperature.component.html',
  styleUrl: './metric-temperature.component.css',
})
export class MetricTemperatureComponent {
  scales: string[] = ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'];
}

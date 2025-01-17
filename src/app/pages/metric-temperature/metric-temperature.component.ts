import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardComponent } from '../../shared/components/card/card.component';

interface TemperatureScale {
  scale: string;
  value: number;
}
@Component({
  selector: 'app-metric-temperature',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatSelectModule, CardComponent],
  templateUrl: './metric-temperature.component.html',
  styleUrl: './metric-temperature.component.css',
})
export class MetricTemperatureComponent {
  temperature: number = 0;
  selectedScale: string = '';
  results: TemperatureScale[] = [
    { scale: 'Celsius', value: 0 },
    { scale: 'Fahrenheit', value: 0 },
    { scale: 'Kelvin', value: 0 },
    { scale: 'Rankine', value: 0 },
  ];
  scales: string[] = ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'];
}

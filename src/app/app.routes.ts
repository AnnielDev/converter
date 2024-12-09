import { Routes } from '@angular/router';
// Components
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MetricSystemComponent } from './pages/metric-system/metric-system.component';
import { MetricTimeComponent } from './pages/metric-time/metric-time.component';
import { MetricWeightComponent } from './pages/metric-weight/metric-weight.component';
import { MetricTemperatureComponent } from './pages/metric-temperature/metric-temperature.component';
import { MetricCurrencyComponent } from './pages/metric-currency/metric-currency.component';

export const routes: Routes = [
  {
    path: '',
    component: SideBarComponent,
    children: [
      { path: 'metric-system', component: MetricSystemComponent },
      { path: 'metric-time', component: MetricTimeComponent },
      { path: 'metric-weight', component: MetricWeightComponent },
      { path: 'metric-temperature', component: MetricTemperatureComponent },
      { path: 'metric-currency', component: MetricCurrencyComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

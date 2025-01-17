import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  currentUrl: string = '';
  showNav: boolean = false;
  routes = [
    { name: 'Currency', route: '/metric-currency', icon: 'currency_exchange' },
    {
      name: 'Temperature',
      route: '/metric-temperature',
      icon: 'device_thermostat',
    },
    { name: 'Time', route: '/metric-time', icon: 'alarm' },
    { name: 'Weight', route: '/metric-weight', icon: 'fitness_center' },
    {
      name: 'Metric System',
      route: '/metric-system',
      icon: 'directions_run',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUrl = this.router.url;

    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }
}

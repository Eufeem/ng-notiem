import { Component } from '@angular/core';
import { INavData, SidebarModule } from '@coreui/angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  navItems: INavData[] = [
    { name: 'Administración', title: true},
    { name: 'Usuarios', url: '/user', icon: 'cilList' }, 
    { name: 'Roles', url: '/role' }
  ]

}

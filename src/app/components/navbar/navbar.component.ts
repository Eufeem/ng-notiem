import { Component } from '@angular/core';
import { ButtonModule, GridModule, NavbarModule } from '@coreui/angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarModule, GridModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

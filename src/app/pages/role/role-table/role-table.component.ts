import { Component, OnInit, inject } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/Role';

@Component({
  selector: 'app-role-table',
  standalone: true,
  imports: [

  ],
  providers: [RoleService],
  templateUrl: './role-table.component.html',
  styleUrl: './role-table.component.css'
})
export class RoleTableComponent implements OnInit {

  roleService = inject(RoleService)
  roleList: Role[] = []

  ngOnInit(): void {
    this.getRoleRequest();
  }

  getRoleRequest() {
    this.roleService.get().subscribe({
      next: response => {
        this.roleList = response
      }, error: err => {
        console.error('Error:', err)
      }, complete: () => {
        console.log('Complete')
      }
    })
  }

}

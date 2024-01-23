// Components
import { Component, OnInit, inject } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../../models/User';

// Module
import { TableNotiemModule } from '../../../modules/table-notiem.module';
import { IconModule } from '@coreui/icons-angular';
import { CommonModule } from '@angular/common';
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons';

// Services
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    TableNotiemModule,
    IconModule,
    CommonModule,
    UserFormComponent
  ],
  providers: [UserService],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {

  userService = inject(UserService)

  icons = { cilPlus, cilPencil, cilTrash };
  headerList = ["#", "Usuario", "Nombre", "Apellido", "Email", "Estatus", "Acciones"]
  userList: User[] = []
  isShowForm: boolean = false;

  ngOnInit(): void {
    this.getUserRequest();
  }

  getUserRequest() {
    this.userService.get().subscribe({
      next: response => {
        this.userList = response
      }, error: err => {
        console.error('Error:', err)
      }, complete: () => {
        console.log('Complete')
      }
    })
  }

  showFormEvent() {
    this.isShowForm = !this.isShowForm;
  }

}

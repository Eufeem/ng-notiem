import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormNotiemModule } from '../../../modules/form-notiem.module';
import { CommonModule } from '@angular/common';
import { cilArrowLeft, cilPlus } from '@coreui/icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';
import { Role } from '../../../models/Role';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormNotiemModule,
  ],
  providers: [
    RoleService, 
    UserService
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() show!: boolean;
  @Output() showChange = new EventEmitter<boolean>();
  icons = { cilArrowLeft, cilPlus };
  roleService = inject(RoleService)
  userService = inject(UserService)
  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })
  listRole!: Role[]; 

  showFormEvent() {
    this.showChange.emit(false);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.warn(this.formGroup.value);
    } 
  }
    /**
     * Request Services
     */

    // Get roles request
  getRolesRequest() {
    this.roleService.get().subscribe({
      next: response => {
        this.listRole = response
      }, error: err => {
        console.log(err)
      }
    })
  }

}

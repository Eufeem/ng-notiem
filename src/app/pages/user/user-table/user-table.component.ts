import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [],
  providers: [UserService],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {

  userService = inject(UserService)
  userList: User[] = []

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

}

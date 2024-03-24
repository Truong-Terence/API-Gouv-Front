import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  providers:[UserService],
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {

  users: User[] = [];
  userService: UserService = inject(UserService)

  ngOnInit() { 
    this.userService.findAll().subscribe(response => {
      for(let user of response) {
        this.users.push(new User(user.firstName, user.email));
      }
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTestComponent } from './components/component-test/component-test.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTestComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gouv';
}

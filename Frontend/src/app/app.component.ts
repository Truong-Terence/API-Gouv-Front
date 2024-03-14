import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gouv';
}

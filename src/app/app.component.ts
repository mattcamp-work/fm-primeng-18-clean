import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonTestComponent } from './button-test/button-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-18-clean';
}

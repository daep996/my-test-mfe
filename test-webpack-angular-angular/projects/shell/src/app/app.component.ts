import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  title = 'shell';
}

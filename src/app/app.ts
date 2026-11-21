import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from './components/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NameComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}

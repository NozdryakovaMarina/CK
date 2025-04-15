import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ItalicDirective } from './core/directive/italic.directive';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RouterModule, ItalicDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital-department-application';
  id: string | null = "0";
}

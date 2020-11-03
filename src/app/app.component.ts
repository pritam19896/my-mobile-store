import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'My Mobile Store';
  homeIcon = faHome;
}

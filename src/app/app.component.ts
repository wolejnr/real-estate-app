import { Component } from '@angular/core';
import { faList, faTh, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-real-estate';
  faList = faList;
  faTh = faTh;
  faMapMarkerAlt = faMapMarkerAlt;
}

import { Component } from '@angular/core';
import { Psy } from './modelPsy';
import { ServiceHttpService } from './service-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: ServiceHttpService){}

  pieski: Array<Psy>;

  getPsy(): void {
    this.http.getPsy().subscribe(psy => this.pieski = psy)
  }
}


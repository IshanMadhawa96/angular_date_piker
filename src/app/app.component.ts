import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-time';
  currentDate:any = new Date(); // got current date
  ngOnInit(): void {
   
  }
}

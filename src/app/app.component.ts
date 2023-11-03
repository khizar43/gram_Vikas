import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gramvikas-pwa';

constructor(){
  throw new Error("testing sentry");
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

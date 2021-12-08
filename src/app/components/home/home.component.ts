import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Admiralfeb.net - Angular';

  constructor() {}

  ngOnInit(): void {}
}

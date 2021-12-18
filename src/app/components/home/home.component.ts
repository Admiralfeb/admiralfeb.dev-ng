import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'admiralfeb.dev - Angular';

  constructor() {}

  ngOnInit(): void {}
}

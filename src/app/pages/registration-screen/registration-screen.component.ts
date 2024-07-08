import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.component.html',
  styleUrls: ['./registration-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

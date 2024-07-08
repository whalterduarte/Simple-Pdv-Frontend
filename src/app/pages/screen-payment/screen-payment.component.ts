import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-payment',
  templateUrl: './screen-payment.component.html',
  styleUrls: ['./screen-payment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

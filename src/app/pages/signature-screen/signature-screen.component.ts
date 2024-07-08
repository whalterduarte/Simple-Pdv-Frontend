import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature-screen',
  templateUrl: './signature-screen.component.html',
  styleUrls: ['./signature-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

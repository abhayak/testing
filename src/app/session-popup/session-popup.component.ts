import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-popup',
  templateUrl: './session-popup.component.html',
  styleUrls: ['./session-popup.component.css']
})
export class SessionPopupComponent implements OnInit {

  constructor() { }
  @Input()  sessionout: string;
  ngOnInit(): void {
  }

}

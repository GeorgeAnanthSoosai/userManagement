import { Component, OnInit, Input } from '@angular/core';

/**
 * Alert Component created to display the dynamic message
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() alertType: string;
  constructor() { }

  ngOnInit() {
  }

}

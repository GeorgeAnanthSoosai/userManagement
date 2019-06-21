import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  createUser(content) {
    this.modalService.open(content, { size: 'lg', backdropClass: 'light-blue-backdrop' })
    .result.then(
      (data) => {
        console.log(data) 
      },
      (dismiss) => {
        console.log("Test", dismiss)
      }
    )
  }

}

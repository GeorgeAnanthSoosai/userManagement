import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {fas, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  userData = [{
    name : 'George',
    friends : ['Pavan', 'Mary', 'Sam', 'Rinkesh'],
    age : 31,
    weight: 140
  }];

  constructor(private modalService: NgbModal) {
    library.add(fas, faCoffee, faPlusCircle);
   }

  ngOnInit() {
  }

  createUser(content) {
    this.modalService.open(content, { size: 'lg', backdropClass: 'light-blue-backdrop' })
    .result.then(
      (data) => {
        console.log(data);
      },
      (dismiss) => {
        console.log('Test', dismiss);
      }
    );
  }

}

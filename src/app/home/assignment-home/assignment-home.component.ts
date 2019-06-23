import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-home',
  templateUrl: './assignment-home.component.html',
  styleUrls: ['./assignment-home.component.scss']
})
export class AssignmentHomeComponent implements OnInit {
  
  constructor(private route: Router, private activevatedRoute : ActivatedRoute) { }

  ngOnInit() {
  }

  viewResults() {
    this.route.navigate(["user-home"], {relativeTo : this.activevatedRoute});
  }
}

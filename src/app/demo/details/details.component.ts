import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataI } from '../data.commd';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  FetchId = '';
  FetchIddetails = Object();
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params  => {
      this.FetchId = params.id;
      console.log(this.FetchId);

    });
  }

  ngOnInit(): void {
    dataI.employees.forEach(element => {
      if (this.FetchId == element.name){
        this.FetchIddetails = element;
      }
    });
  }

}

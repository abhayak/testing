import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationnService } from 'src/app/_service/authenticationn.service';
import { damiData, dataI } from '../data.commd';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  dmidata = dataI;
  damidata = damiData;
  onedetails = Object;
  pathd = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dmidata.employees;
    console.log(this.dmidata);
    // this.auth.cheecktimeout();
  }

  ftch(eve: any){
    console.log(eve);
    this.pathd = eve.name;
    this.router.navigate(['/demo', eve.name]);
  }

  info(event: any){
    console.log(event);
    this.onedetails = event;
  }

}

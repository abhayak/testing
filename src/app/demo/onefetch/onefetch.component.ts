import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onefetch',
  templateUrl: './onefetch.component.html',
  styleUrls: ['./onefetch.component.css']
})
export class OnefetchComponent implements OnInit {

  // addClient!:FormGroup;
  @Input() setdataE: any;
  @Input() addClient!: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.addClient = this.formbuilder.group({
      first_name: ['kfjg', Validators.required],
      last_name: ['this.setdataE.last_name', Validators.required],


    });
    console.log(this.setdataE.last_name);
    this.addClient.controls.first_name.setValue(this.setdataE.first_name);
  }

}

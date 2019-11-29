import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formatka-sposob2',
  templateUrl: './formatka-sposob2.component.html',
  styleUrls: ['./formatka-sposob2.component.css']
})
export class FormatkaSposob2Component implements OnInit {



  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.maxLength(5)],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit() {

  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public clientInfoForm: FormGroup;

  constructor() { 
    this.clientInfoForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
      secondName: new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z ]*')])),
      firstSurname: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
      secondSurname: new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z ]*')])),
      ci: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9 ]*')])),
      phone: new FormControl('', Validators.compose([Validators.pattern('[0-9 ]*')])),
      residence: new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z 0-9 ñ Ñ á Á éÉ íÍ óÓ úÚ ,;]*')])),
      email: new FormControl('', Validators.compose([Validators.pattern('\\S+'), Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
    });
  }

  ngOnInit() {
  }

}

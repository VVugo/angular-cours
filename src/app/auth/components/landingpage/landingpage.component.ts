import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  inscription(){
    return this.router.navigate(['auth/signup']);
  }
  connexion(){
    return this.router.navigate(['auth/signin']);
  }

}

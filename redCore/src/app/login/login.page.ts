import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthserviceService, private router: Router) { }

  async login(form){
    this.auth.login(form.value).subscribe((res) => {
      if(this.auth.isLoggedIn()){
        this.router.navigateByUrl('');
      } else {
        alert("jo")
      }
    })
  }

  goBack(){
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}

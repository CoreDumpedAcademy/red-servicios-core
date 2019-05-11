import { AuthserviceService } from './../../authservice.service';
import { APIService } from './../../api.service';
import { ForoService } from './../foro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  hasLoaded=false

  currentUser:{
    username:String,
    picture:String
  }

  constructor(private service: ForoService, private router: Router, private API: APIService, private auth: AuthserviceService) { }

  loadData() {
    this.auth.getEmail().then((email) => {
      this.API.tieneCuenta(email).subscribe((cuenta:{
        user:{
          username:String,
          picture:String
        }}) => {
        this.currentUser = cuenta.user
        this.hasLoaded = true
      })
    }, (err) => this.router.navigateByUrl('login'))
  }

  ngOnInit() {
    this.loadData();
  }

  sendData(form:NgForm) {
    
  }

}

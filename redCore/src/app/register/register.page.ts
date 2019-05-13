import { AuthserviceService } from './../authservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

//Para foto de perfil
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //Variables registro
  public name: string;
  public email: string;
  public password: string;
  public phone: string;
  public pic: any;

  user = {}

  constructor(
              private imagePicker: ImagePicker,
              private crop: Crop,
              private transfer: FileTransfer, 
              private router: Router,
              private auth: AuthserviceService
              ) {}

  //Variabes de imagen
    fileUrl: any = null;
    respData: any;

  //Funcion camara adaptar formato
  cropUpload() {
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.crop.crop(results[i], { quality: 100 })
            .then(
              newImage => {
                console.log('new image path is: ' + newImage);
                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                   fileKey: 'file',
                   fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                };
  
                fileTransfer.upload(newImage, 'http://192.168.0.7:3000/api/upload', uploadOpts)
                 .then((data) => {
                   console.log(data);
                   this.respData = JSON.parse(data.response);
                   console.log(this.respData);
                   this.fileUrl = this.respData.fileUrl;
                 }, (err) => {
                   console.log(err);
                 });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }

  
 updatePicture($event) : void {
  var re = /C:\\fakepath\\/i; 
  var str = $event.target.value;
  var newstr = str.replace(re, "..\\..\\assets\\"); 
  this.fileUrl = newstr;
 }

  ngOnInit() {
  }
  
  //Registrar usuario en la API
  register(){
   console.log (this.user);
   this.auth.addUser(this.user);
  }

  goBack(){
    this.router.navigateByUrl('login')
  }

}

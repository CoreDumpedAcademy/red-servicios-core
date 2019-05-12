import { Component,
         OnInit, 
         Input,  
         Output, 
         OnChanges,
         forwardRef,
         ViewChild
} from '@angular/core';
import { NgxCroppieComponent } from 'ngx-croppie';
import * as Croppie from 'croppie';
import { CroppieOptions, ResultOptions, CropData } from 'croppie';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type Type = 'canvas' | 'base64' | 'html' | 'blob' | 'rawcanvas';


@Component({
  selector: 'app-croppie',
  templateUrl: './croppie.component.html',
  styleUrls: ['./croppie.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CroppieComponent),
      multi: true
    }

  ]
})


export class CroppieComponent implements OnInit, OnChanges, ControlValueAccessor {
    /* Pass the height of the image to this component */
    @Input()
    public imgCropToHeight = '400';
  
    /* Pass the width of the image to this component */
    @Input()
    public imgCropToWidth = '400';
  
    /* Return type of our image */
    @Input()
    private responseType: 'blob' | 'base64' = 'base64';
  
    /* Our cropped image and the value of our image controller */
    public croppieImage;
  
    /* Options for the cropped image type and size */
    public outputoption = { type: 'blob', size: 'original' };
  
    /* Element to paint our form control */
    @ViewChild('ngxCroppie')
    ngxCroppie: NgxCroppieComponent;
    
  
  constructor() { }

  ngOnInit(): void {
    this.outputoption = { type: this.responseType, size: 'original' };
  }

  //Adaptar formato
  public get croppieOptions(): CroppieOptions {
    const opts: CroppieOptions = {};
    opts.viewport = {
      width: parseInt(this.imgCropToWidth, 10),
      height: parseInt(this.imgCropToHeight, 10)
    };

    opts.boundary = {
      width: parseInt(this.imgCropToWidth, 10) + 50,
      height: parseInt(this.imgCropToWidth, 10) + 50
    };

    opts.enforceBoundary = true;
    return opts;
}
//Cuando seleccionas la imagen
imageUploadEvent(evt: any) {
  if (!evt.target) {
    return;
  }
  if (!evt.target.files) {
    return;
  }

if (evt.target.files.length !== 1) {
    return;
  }

const file = evt.target.files[0];
  if (
    file.type !== 'image/jpeg' &&
    file.type !== 'image/png' &&
    file.type !== 'image/gif' &&
    file.type !== 'image/jpg'
  ) {
    return;
  }

const fr = new FileReader();
  fr.onloadend = loadEvent => {
    this.croppieImage = fr.result.toString();
  };

fr.readAsDataURL(file);
}

//Cuando cortas la imagen 
newImageResultFromCroppie(img: string) {
  this.croppieImage = img;
  //set this croppieImage value as the value of the component
  this.propagateChange(this.croppieImage);
}

//Cambiar imagen
ngOnChanges(changes: any) {
  if (this.croppieImage) {
    return;
  }

if (!changes.imageUrl) {
    return;
  }

if (!changes.imageUrl.previousValue && changes.imageUrl.currentValue) {
    this.croppieImage = changes.imageUrl.currentValue;
    this.propagateChange(this.croppieImage);
  }
}

//Para añadirlo como parte del formulario
writeValue(value: any) {
  if (value !== undefined) {
    this.croppieImage = value;
    this.propagateChange(this.croppieImage);
  }
}

propagateChange = (_: any) => {};

registerOnChange(fn) {
  this.propagateChange = fn;
}

registerOnTouched() {}
 
}

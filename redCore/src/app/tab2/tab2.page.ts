import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    sliderConfig = {
        loop: false,
        initialSlide: 0,
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 1.2
      }

    public contents: [{
        img: String,
        title: String,
        msg: String
    }]

    constructor(private router: Router) {
        this.contents = [{
            img : '/assets/MicrosoftF82.jpg',
            title : 'Tecnologías de Microsoft',
            // tslint:disable-next-line:max-line-length
            msg : 'El lunes 29 de abril a las 16:00h en el aula 3006 del Campus Sur de la UPM. Evento gratuito ¿Quieres aprender sobre cómo Microsoft hace lo que…'
            }
        ]
        this.contents.push({
            img : '/assets/photo_2019-04-04.jpg',
            title : 'La Curiosidad No Mató Al Gato, Ep. 7: Más pesados que el agujero negro de Messier 87',
            msg : '¡Escúchalo en iVoox y suscríbete!'
        })
        this.contents.push(
        {
            img : '/assets/photo65972961570564334.jpg',
            title : 'Carta del presidente',
            msg : 'Sobre la filosofía de la asociación “Core Dumped es un espacio joven, ' +
                'abierto y gratuito que incentiva el aprendizaje y el desarrollo de proyectos más allá de lo…'
        })
    }

    toAbout() {
        this.router.navigateByUrl('core/about')
    }

    gotoServices(){
        this.router.navigateByUrl('core/servicios')
    }
}

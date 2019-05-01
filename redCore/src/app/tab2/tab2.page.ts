import {Component} from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public contents: Array<object> = [];

    constructor() {
        this.contents = [
            {
                img : '/assets/MicrosoftF82.jpg',
                title : 'Tecnologías de Microsoft',
                // tslint:disable-next-line:max-line-length
                msg : 'El lunes 29 de abril a las 16:00h en el aula 3006 del Campus Sur de la UPM. Evento gratuito ¿Quieres aprender sobre cómo Microsoft hace lo que…'
            },
            {
                img : '/assets/photo_2019-04-04.jpg',
                title : 'La Curiosidad No Mató Al Gato, Ep. 7: Más pesados que el agujero negro de Messier 87',
                msg : '¡Escúchalo en iVoox y suscríbete!'
            },
            {
                img : '/assets/photo65972961570564334.jpg',
                title : 'Carta del presidente',
                msg : 'Sobre la filosofía de la asociación “Core Dumped es un espacio joven, ' +
                    'abierto y gratuito que incentiva el aprendizaje y el desarrollo de proyectos más allá de lo…'
            },
        ];
    }
}

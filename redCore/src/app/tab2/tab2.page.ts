import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {RssService} from '../rss.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    hasLoaded = false;
    items: [{}];

    sliderConfig = {
        loop: false,
        initialSlide: 0,
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 1.2
    };

    constructor(private router: Router, private rss: RssService) {
    }

    loadRss() {
        this.rss.getData().subscribe((data: [{}]) => {
            this.items = data;
            this.hasLoaded = true;
            return 0;
        }, err => {
            console.log(err);
            return 1;
        });
        return 1;
    }

    toAbout() {
        this.router.navigateByUrl('core/about');
        return 0;
    }

    gotoServices() {
        this.router.navigateByUrl('core/servicios');
        return 0;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.loadRss();
        return 0;
    }
}

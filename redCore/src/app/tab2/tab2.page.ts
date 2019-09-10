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

    sliderConfig = {
      loop: false,
      initialSlide: 0,
      spaceBetween: 5,
      centeredSlides: true,
      slidesPerView: 1.2
    };
    items: any;

    constructor(private router: Router, private rss: RssService) {
    }

    loadRss() {
      this.rss.getData().subscribe(data => {
        this.items = data;
        this.hasLoaded = true;
      }, err => {
        console.log(err);
      });
    }

    toAbout() {
      this.router.navigateByUrl('core/about');
    }

    gotoServices() {
        this.router.navigateByUrl('core/servicios');
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.loadRss();
    }
}

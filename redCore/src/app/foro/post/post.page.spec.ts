import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {PostPage} from './post.page';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('PostPage', () => {
    let component: PostPage;
    let fixture: ComponentFixture<PostPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [IonicStorageModule.forRoot(), RouterTestingModule],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

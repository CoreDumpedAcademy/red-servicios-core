
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExpandableComponent } from "../../components/expandable/expandable.component";
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [Tab2Page, ExpandableComponent]
})
export class Tab2PageModule {
}

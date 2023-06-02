import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { ReadMoreCardComponent } from './read-more-card/read-more-card.component';
import {MatCardModule} from "@angular/material/card";
import { CoursetableComponent } from './table/coursetable/coursetable.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ReadMoreCardComponent,
    CoursetableComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ReadMoreCardComponent
  ],
    imports: [
        CommonModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatSidenavModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatTableModule
    ]
})
export class SharedModule { }

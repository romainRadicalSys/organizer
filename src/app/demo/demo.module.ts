import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../shared/material.module';
import { DemoRoutingModule } from './demo-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { ToolbarComponent } from './contactmanager/components/toolbar/toolbar.component';
import { MainContentComponent } from './contactmanager/components/main-content/main-content.component';
import { SidenavComponent } from './contactmanager/components/sidenav/sidenav.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent, ContactmanagerComponent, ToolbarComponent, MainContentComponent, SidenavComponent, DemoHomeComponent]
})
export class DemoModule { }

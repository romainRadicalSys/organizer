import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';

const routes: Routes = [
  { path: 'home', component: DemoHomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'contactManagement', component: ContactmanagerComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

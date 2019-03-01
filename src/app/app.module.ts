import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { TodosComponent } from './todos/todos.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DataService } from './core/data.service';
import { AdminModule } from './admin/admin.module';
import { TodoComponent } from './todos/todo/todo.component';
import { ProjectComponent } from './todos/project/project.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PathNotFoundComponent, TodosComponent, MainMenuComponent, TodoComponent, ProjectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    AdminModule,
    FormsModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

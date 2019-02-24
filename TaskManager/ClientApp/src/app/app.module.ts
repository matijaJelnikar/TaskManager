import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { GridItemsComponent } from './grid-items/grid-items.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HttpModule } from '@angular/http';
import { RestService } from './rest.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddOrEditComponent,
    GridItemsComponent,
    TaskManagerComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add-or-edit', component: AddOrEditComponent },
      { path: 'grid-items', component: GridItemsComponent},
      { path: 'task-manager', component: TaskManagerComponent }
    ])
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

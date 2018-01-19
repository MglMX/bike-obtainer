import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ChairComponent } from './chair/chair.component';
import { ChairDetailComponent } from './chair-detail/chair-detail.component';
import { ChairService } from './chair.service'


@NgModule({
  declarations: [
    AppComponent,
    ChairComponent,
    ChairDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ChairService],
  bootstrap: [AppComponent]
})
export class AppModule { }

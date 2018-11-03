import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import{HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CoreService } from './core/employee-data.service';
import { InMemoryWebApiService } from './in-memory-web-api.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,CoreModule,
   HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService),
   HttpClientModule
  ],
  providers: [CoreService,InMemoryWebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

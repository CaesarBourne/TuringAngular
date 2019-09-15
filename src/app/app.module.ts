import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartWebComponent } from './smart-web/smart-web.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MoshangComponent } from './moshang/moshang.component'
import SummaryPipe from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SmartWebComponent,
    FormLoginComponent,
    MoshangComponent,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

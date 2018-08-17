import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { PerformerProfileComponent } from './components/performer-profile/performer-profile.component';
import { ManagerProfileComponent } from './components/manager-profile/manager-profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    RegistrationFormComponent,
    DynamicFormQuestionComponent,
    PerformerProfileComponent,
    ManagerProfileComponent,
    LoginFormComponent,
    UserProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

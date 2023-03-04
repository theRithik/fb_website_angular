import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { FriendsComponent } from './friends/friends.component';
import { SettingsComponent } from './settings/settings.component';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';



const appRoute: Routes=[
  {path:'', redirectTo:'register', pathMatch:'full'},
{path:'register', component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'forgot', component:ForgotPassComponent},
{path:'home', component:HomeComponent},
{path:'home/:id', component:HomeComponent},
{path:'network', component:NetworkComponent},
{path:'friends', component:FriendsComponent},
{path:'settings', component:SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPassComponent,
    HomeComponent,
    NetworkComponent,
    FriendsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
   
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

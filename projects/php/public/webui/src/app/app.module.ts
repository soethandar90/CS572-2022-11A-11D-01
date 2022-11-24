import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artists/artists.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DefaultErrorComponent } from './default-error/default-error.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { AddOneArtistComponent } from './add-one-artist/add-one-artist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    FooterComponent,
    NavigationComponent,
    DefaultErrorComponent,
    SearchArtistComponent,
    AddOneArtistComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "artists",
        component: ArtistsComponent
      },
      {
        path: "artists/:artistId",
        component: ArtistComponent
      },
      {
        path: "addoneartist",
        component: AddOneArtistComponent
      },
      {
        path: "artists/:artistId/update",
        component: AddOneArtistComponent
      },
      {
        path: "search",
        component: SearchArtistComponent
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "**",
        pathMatch: "full",
        component: DefaultErrorComponent
      }
    ])
  ],
  providers: [{
    provide: JWT_OPTIONS,
    useValue: JWT_OPTIONS
  },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

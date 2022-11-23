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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    FooterComponent,
    NavigationComponent,
    DefaultErrorComponent,
    SearchArtistComponent,
    AddOneArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
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
        path:"addoneartist",
        component: AddOneArtistComponent
      },
      {
        path:"artists/:artistId/update",
        component: AddOneArtistComponent
      },
      {
        path:"search",
        component : SearchArtistComponent
      },
      {
        path: "**",
        pathMatch: "full",
        component: DefaultErrorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

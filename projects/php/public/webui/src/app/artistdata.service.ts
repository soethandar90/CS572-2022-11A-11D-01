import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './artists/artists.component';

@Injectable({
  providedIn: 'root'
})
export class ArtistdataService {
  private apiBaseUrl: string = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  public getAllArtists(): Observable<Artist[]> {
    const url: string = this.apiBaseUrl + "/artists";
    return this.http.get<Artist[]>(url);
  }

  public getOneArtist(artistId: string): Observable<Artist> {
    const url: string = this.apiBaseUrl + "/artists/" + artistId;
    return this.http.get<Artist>(url);
  }

}

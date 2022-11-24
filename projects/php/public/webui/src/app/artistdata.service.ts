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

  // public getSearchArtists(artistName:string):Observable<Artist[]>{
  //   const url:string=this.apiBaseUrl+"/search?name="+artistName;
  //   return this.http.get<Artist[]>(url);
  // }

  public getOneArtist(artistId: string): Observable<Artist> {
    const url: string = this.apiBaseUrl + "/artists/" + artistId;
    return this.http.get<Artist>(url);
  }

  public deleteOneArtist(artistId: string): any {
    const url: string = this.apiBaseUrl + "/artists/" + artistId;
    return this.http.delete(url);
  }

  public addOneArtist(artist: Artist): Observable<Artist> {
    const url = this.apiBaseUrl + "/artists";
    console.log(artist.name);
    console.log(artist.dob);
    console.log(artist.album);
    return this.http.post(url, artist) as Observable<Artist>;
  }

  public updateOneArtist(artistId:string, artist: Artist): Observable<Artist> {
    const url = this.apiBaseUrl + "/artists/" + artistId;
    return this.http.put(url, artist) as Observable<Artist>;
  }

}

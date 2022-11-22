import { Component, OnInit } from '@angular/core';
import { ArtistdataService } from '../artistdata.service';

export class Album{
  #_id!:string;
  #name!:string;
  #year!:Number;
  #noOfSongs!:Number;

  get _id() { return this.#_id; }
  set _id(_id: string) { this.#_id = _id; }

  get name() { return this.#name; }
  set name(name: string) { this.#name = name; }

  get year() { return this.#year; }
  set year(year: Number) { this.#year = year; }

  get noOfSongs() { return this.#noOfSongs; }
  set noOfSongs(noOfSongs: Number) { this.#noOfSongs = noOfSongs; }
}

export class Artist {
  #_id!: string;
  #name!: string;
  #dob!: string;
  #album!:Album[];

  get _id() { return this.#_id; }
  set _id(_id: string) { this.#_id = _id; }

  get name() { return this.#name; }
  set name(name: string) { this.#name = name; }

  get dob() { return this.#dob; }
  set dob(dob: string) { this.#dob = dob; }

  get album(){return this.#album;}
  set album(album:Album[]){this.#album=album;}
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists!: Artist[];

  constructor(private artistdataService: ArtistdataService) { }

  ngOnInit(): void {
    this.artistdataService.getAllArtists().subscribe({
      next: (artists) => this.displayArtists(artists),
      error: (error) => {
        this.artists = [];
        console.log(error);
      }
    });
  }

  private displayArtists(artists: Artist[]) {
    this.artists = artists;
  }
}

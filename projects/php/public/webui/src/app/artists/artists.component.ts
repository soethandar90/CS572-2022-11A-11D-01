import { Component, OnInit } from '@angular/core';
import { ArtistdataService } from '../artistdata.service';

export class Artist {
  #_id!: String;
  #name!: String;
  #dob!: String;

  get _id() { return this.#_id; }
  set _id(_id: String) { this.#_id = _id; }

  get name() { return this.#name; }
  set name(name: String) { this.#name = name; }

  get dob() { return this.#dob; }
  set dob(dob: String) { this.#dob = dob; }
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

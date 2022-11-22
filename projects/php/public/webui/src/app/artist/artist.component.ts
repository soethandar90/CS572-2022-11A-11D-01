import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistdataService } from '../artistdata.service';
import { Artist } from '../artists/artists.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist!: Artist;

  constructor(private artistdataService: ArtistdataService, private route: ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    const artistId: string = this.route.snapshot.params["artistId"];
    this.artistdataService.getOneArtist(artistId).subscribe({
      next: (artist) => this.displayArtist(artist),
      error: (error: any) => {
        this.artist = new Artist();
        console.log(error);
      },
    });
  }

  private displayArtist(artist: Artist) {
    this.artist = artist;
  }

  deleteOneArtist(artistId :string){
    this.artistdataService.deleteOneArtist(artistId).subscribe({
      next: ()=>{ },
      error : ()=>{},
      complete:()=>{
        this.router.navigate(["artists"]);
      }
    });
  }
}

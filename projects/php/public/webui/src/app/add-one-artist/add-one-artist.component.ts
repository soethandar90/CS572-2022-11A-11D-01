import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistdataService } from '../artistdata.service';
import { Album, Artist } from '../artists/artists.component';

@Component({
  selector: 'app-add-one-artist',
  templateUrl: './add-one-artist.component.html',
  styleUrls: ['./add-one-artist.component.css']
})
export class AddOneArtistComponent implements OnInit {

  artist: Artist = new Artist();
  album: Album = new Album();
  updateFlag!: boolean;
  constructor(private formBuilder: FormBuilder, private artistDataService: ArtistdataService, private route: ActivatedRoute, private router: Router) { }
  frmAlbum = {
    albumName: new FormControl(),
    albumYear: new FormControl(),
    noOfSongs: new FormControl()
  }

  frmArtist = this.formBuilder.group({
    _id: new FormControl(),
    name: new FormControl(),
    dob: new FormControl(),
    album: [this.frmAlbum
      //   {
      //   name: new FormControl(),
      //   year: new FormControl(),
      //   noOfSongs: new FormControl()
      // }
    ]
  });

  ngOnInit(): void {
    const artistId: string = this.route.snapshot.params["artistId"];
    console.log("Artist ID: " + artistId);
    if (artistId) {
      this.updateFlag = true;
      this.artistDataService.getOneArtist(artistId).subscribe({
        next: (artist) => {
          this.displayArtist(artist)
          console.log(artist.album);
        },
        error: (error: any) => {
          this.artist = new Artist();
          console.log(error);
        },
      });
    }
  }

  onAdd(frmArtist: FormGroup) {
    console.log(frmArtist.value.name);
    this.artistDataService.addOneArtist(frmArtist.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/artists");
      },
      error: () => { },
      complete: () => { }
    });
  }

  onUpdate(frmArtist: FormGroup) {
    const artistId: string = this.route.snapshot.params["artistId"];
    if (!frmArtist.value._id) {
      frmArtist.value._id = this.artist._id;
    }
    if (!frmArtist.value.name) {
      frmArtist.value.name = this.artist.name;
    }
    if (!frmArtist.value.dob) {
      frmArtist.value.dob = this.artist.dob;
    }
    if (!frmArtist.value.album) {
      frmArtist.value.album = this.artist.album;
    }
    this.artistDataService.updateOneArtist(artistId, frmArtist.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/artists/" + artistId);
      },
      error: () => { },
      complete: () => { }
    });

  }



  private displayArtist(artist: Artist) {
    this.artist = artist;
  }
}

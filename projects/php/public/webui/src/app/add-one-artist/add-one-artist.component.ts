import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistdataService } from '../artistdata.service';

@Component({
  selector: 'app-add-one-artist',
  templateUrl: './add-one-artist.component.html',
  styleUrls: ['./add-one-artist.component.css']
})
export class AddOneArtistComponent implements OnInit {
  //frmArtist! :FormGroup;
  constructor(private formBuilder : FormBuilder, private artistDataService :ArtistdataService, private router : Router) { }

  frmArtist = this.formBuilder.group({
    _id :new FormControl(),
    name : new FormControl(),
    dob : new FormControl()
  });

  ngOnInit(): void {
  }

  addOneArtist(frmArtist : FormGroup){  
    this.artistDataService.addOneArtist(frmArtist.value).subscribe({
      next : ()=>{
        this.router.navigateByUrl("/artists");
      },
      error : ()=>{},
      complete: ()=>{} 
    });
    
  }

}

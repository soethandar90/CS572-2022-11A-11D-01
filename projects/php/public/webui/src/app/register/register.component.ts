import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationform!: FormGroup;

  constructor(private userdataservice: UserDataService, private router: Router) { }

  ngOnInit(): void {
    this.registerationform = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      passwordrepeat: new FormControl()
    });
  }

  onSubmit(form: FormGroup): void {
    console.log("form", form.value);
    this.userdataservice.register(form.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/artists");
      }, error: () => { }
    });
  }

}

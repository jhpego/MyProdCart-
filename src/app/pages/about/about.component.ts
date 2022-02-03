import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Person } from 'src/app/models/models';
import { PublicService } from 'src/app/public.service';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public person: Person | null = null;
  constructor(
    private aboutService: AboutService,
    private publicService: PublicService
    ) { }
  public personDescription = "";


  ngOnInit(): void {
    this.getUser();
  }


  getUser(){
    this.aboutService.GetUser().subscribe( res=> {
      this.person = res;
      this.personDescription = JSON.stringify(res);
      this.personDescription = `Hello, my name is ${res.firstName} ${res.lastName}, I'm ${res.age} years old, and I like ${res.hobbys ? res.hobbys.map( h => h.description ).join(", ") : "" }, etc...`;
    }, err => {
      console.warn( "Error: ", err);
      this.publicService.showMsgError(err);
    })
  }

  doLike() {
    const message = "Thank you!";
    this.publicService.showMsgInfo(message);
  }

  // getPerson(){
  //   const myId = "486a65af-befe-4906-8df5-a6f32281a143"
  //   this.aboutService.GetPerson(myId).subscribe( res=> {
  //     this.person = res;
  //   }, err => {
  //     console.warn( "Error: ", err);
  //   })
  // }

}

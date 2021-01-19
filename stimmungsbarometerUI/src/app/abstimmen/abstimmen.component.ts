import { Component, OnInit } from '@angular/core';
import {StimmungService} from '../stimmung.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-abstimmen',
  templateUrl: './abstimmen.component.html',
  styleUrls: ['./abstimmen.component.css']
})
export class AbstimmenComponent implements OnInit {
  memberName: string;
  teamName: string;
  stimmung: number;
  coffee: number;

  constructor(private stimmungsService: StimmungService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formatLabel(value: number): number {
    return value;
  }

  vote(): void {
    console.log('MemberName:', this.memberName);
    console.log('TeamName:', this.teamName);
    console.log('Ausgewählte Stimmung: ', this.stimmung);
    console.log('Anzahl Kaffee', this.coffee);
    //
    if (this.memberName.trim() === undefined || this.teamName.trim() === undefined || this.stimmung === undefined) {
      this.openSnackbar('Bitte vervollständige deine Angaben', 'Fertig');
    }
    if (this.coffee === undefined) {
      this.coffee = 0;
    }
    let isVotingSuccessful: boolean;
    this.stimmungsService.vote(this.memberName, this.teamName, this.stimmung, this.coffee).subscribe(result => isVotingSuccessful = result);
    if (isVotingSuccessful) {
      this.openSnackbar('Du hast erfolgreich abgestimmt!', 'Fertig');
    }
  }

  openSnackbar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}

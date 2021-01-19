import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {StimmungService} from '../stimmung.service';
import {ResultResponse} from '../resultResponse';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  teamName: string;
  average: number;
  min: number;
  max: number;
  coffee: number;

  constructor(private stimmungsService: StimmungService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getTeamResults(): void {
    if (this.teamName.trim() === undefined) {
      this.openSnackbar('Gibt zuerst deinen Teamnamen an!', 'Fertig');
    }
    let score: ResultResponse;
    this.stimmungsService.getResults(this.teamName).subscribe(result => score = result);
  }

  openSnackbar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}

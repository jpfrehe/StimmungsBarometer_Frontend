import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstimmenRequest } from './abstimmenRequest';
import {ResultResponse} from './resultResponse';

@Injectable({
  providedIn: 'root'
})
export class StimmungService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  vote(member: string, team: string, mood: number, coffee: number): Observable<boolean> {
    const abstimmenRequest: AbstimmenRequest = this.createRequest(member, team, mood, coffee);
    return this.http.post<boolean>('localhost:8080/api/v1/rating', abstimmenRequest, this.httpOptions);
  }

  getResults(team: string): Observable<ResultResponse> {
    return this.http.get<ResultResponse>('localhost:8080/api/v1/group/rating/' + team);
  }

  private createRequest(member: string, team: string, mood: number, coffee: number): AbstimmenRequest {
    return {
      mitgliedName: member,
      teamName: team,
      stimmung: mood,
      coffeeCount: coffee
    } as AbstimmenRequest;
  }
}

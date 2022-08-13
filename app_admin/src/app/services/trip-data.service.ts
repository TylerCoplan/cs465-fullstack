import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";

import { Authresponse } from "../models/Authresponse";
import { BROWSER_STORAGE } from "../storage";
import { Trip } from "../models/trip";
import { User } from "../models/user";

@Injectable()
export class TripDataService {

  constructor(private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Yay, new data from TripDataService.addTrip(Trip)");
    return this.http
      .post(this.tripUrl, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('ONLY ONE TRIP TripDataService#getTrip(string)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Hello from Inside TripDataService#getTrips()');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }
  
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Update trip from TripDataService.updateTrip(Trip)');
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Well that didn\'t work...', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall("login", user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall("register", user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response.json() as Authresponse)
      .catch(this.handleError);
  }
}

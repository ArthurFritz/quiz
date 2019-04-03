
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class LoadingService {

  public isLoading = false;
  private isLoadingChange = new Subject<Boolean>();
  private quantityRequest = 0;

  constructor() {
    this.isLoadingChange.next(false);
  }
  
  public addRequest(){
    this.quantityRequest += 2;
    this.update();
  }

  public finishRequest(){
    this.quantityRequest--;    
    this.update();
  }

  public getLoading(): Observable<any> {
    return this.isLoadingChange.asObservable();
  }

  private update(){
    this.isLoading = this.quantityRequest > 0;
    this.isLoadingChange.next(this.isLoading);
  }

}
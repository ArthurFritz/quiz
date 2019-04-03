import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private isLoadingSubscription: Subscription;
  public loading: Boolean;

  constructor(private _loadingService:LoadingService,
              private _router:Router) { }

  ngOnInit() {
    this.loading = this._loadingService.isLoading;
    this.isLoadingSubscription = this._loadingService.getLoading().subscribe(valor=>{      
       setTimeout(()=>{
        this.loading = valor;  
       },1);
    });
  }

  ngOnDestroy(){
    if(this.isLoadingSubscription) {
      this.isLoadingSubscription.unsubscribe();
    }
  }

  logout(){
    sessionStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

}

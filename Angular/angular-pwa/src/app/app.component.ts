import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-pwa';

  constructor(private updateService:SwUpdate){}
  ngOnInit(): void {
    this.updateService.versionUpdates.subscribe((event: VersionEvent) =>{
      alert(event.type);

      if(event.type == 'VERSION_READY' && 
        confirm(`NEW version avialble. Load new Version`)
      ){
        window.location.reload();
      }

    })
   
  }




}

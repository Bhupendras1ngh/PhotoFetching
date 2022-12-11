import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {
  photoUrl!: string;
  constructor(private photosService : PhotosService) {
   this.fetchPhoto();  
  }
    onCLick(){
      this.fetchPhoto();
    }
    fetchPhoto(){
      this.photosService.getPhoto().subscribe( 
        response => {
        this.photoUrl = response.urls.regular;
      }
     );
    }
    


  ngOnInit(): void {
  }

}

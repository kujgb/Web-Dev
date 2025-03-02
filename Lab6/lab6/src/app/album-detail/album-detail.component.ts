import { Component, OnInit } from '@angular/core'; 
import { Album } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.errorMessage = 'Invalid album ID';
      return;
    }
    this.loaded = false;
    this.albumsService.getAlbum(id)
      .pipe(
        catchError(error => {
          this.errorMessage = 'Failed to load album';
          return of(null);
        }),
        finalize(() => this.loaded = true)
      )
      .subscribe(albums => {
        if (albums) {
          this.album = albums;
        }
      });
  }

  updateAlbums(): void {
    if (!this.album) return;
    this.loaded = false;
    this.albumsService.updateAlbum(this.album)
      .pipe(
        catchError(error => {
          this.errorMessage = 'Failed to update album';
          return of(null);
        }),
        finalize(() => this.loaded = true)
      )
      .subscribe(updatedAlbums => {
        if (updatedAlbums) {
          console.log('Album updated:', updatedAlbums);
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}

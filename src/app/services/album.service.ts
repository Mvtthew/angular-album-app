import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';

@Injectable({
	providedIn: 'root'
})
export class AlbumService {

	baseUrl: string = 'https://jsonplaceholder.typicode.com/';
	albumsLimit: number = 7;
	photosLimit: number = 5;

	constructor(private http: HttpClient) { }

	getAlbums(): Observable<Album[]> {
		return this.http.get<Album[]>(`${this.baseUrl}albums?_limit=${this.albumsLimit}`);
	}

	getAlbumPhotos(albumId: number): Observable<Photo[]> {
		return this.http.get<Photo[]>(`${this.baseUrl}album/${albumId}/photos?_limit=${this.photosLimit}`);
	}


}

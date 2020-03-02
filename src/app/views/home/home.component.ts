import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	albumsList: Album[];

	constructor(private albumService: AlbumService) { }

	ngOnInit(): void {
		this.albumService.getAlbums().subscribe(albums => this.albumsList = albums);
	}

}

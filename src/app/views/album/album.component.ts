import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

	photos: Photo[];

	constructor(
		private albumService: AlbumService,
		private route: ActivatedRoute,

	) { }

	ngOnInit(): void {
		this.albumService.getAlbumPhotos(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(photos => this.photos = photos);
	}

}

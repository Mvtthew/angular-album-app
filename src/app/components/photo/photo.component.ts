import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/Photo';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

	@Input() photo: Photo;
	photoLargeVisible: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	showLarge() {
		this.photoLargeVisible = !this.photoLargeVisible;
	}

}

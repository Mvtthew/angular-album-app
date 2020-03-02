import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/Photo';

@Component({
	selector: 'app-photo-large',
	templateUrl: './photo-large.component.html',
	styleUrls: ['./photo-large.component.scss']
})
export class PhotoLargeComponent implements OnInit {

	@Input() photo: Photo;

	constructor() { }

	ngOnInit(): void {
	}

}

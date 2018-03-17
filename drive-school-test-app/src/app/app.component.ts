import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	public testQuestions: any = [];

	constructor(
		private appService: AppService
	) { }

	ngOnInit(): void {
		this.testQuestions = this.appService.getTests();
	}

	selectAnswer(answer: any): void {
		answer.selected = true;
	}
}

import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import * as _ from 'lodash';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	public questions: any = [];

	constructor(
		private appService: AppService
	) { }

	ngOnInit(): void {
		this.questions = _.shuffle(this.appService.getQuestions());
		this.shuffleAnswers();
	}

	selectAnswer(answer: any): void {
		answer.selected = true;
	}

	shuffleAnswers(): void {
		for (let i = 0; i < this.questions.length; i++) {
			this.questions[i].answers = _.shuffle(this.questions[i].answers);
		}
	}
}

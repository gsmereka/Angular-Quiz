import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonLoaderService } from '../../services/json-loader.service';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() quiz_id: string = '';

  title: string = '';
  fileUrl: string = 'assets/data/quizz_1.json';
  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;
  logoPath: string = 'assets/imgs/logo.png';
  quizData: any;

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit(): void {
    this.jsonLoaderService.loadJsonFile(this.fileUrl).subscribe(
      (data) => {
        if (data) {
          this.quizData = data;
          this.finished = false;
          this.title = data.title;

          this.questions = data.questions;
          this.questionSelected = this.questions[this.questionIndex];

          this.questionIndex = 0;
          this.questionMaxIndex = this.questions.length;
        }
      },
      (error) => {
        console.error('Erro ao carregar o arquivo JSON', error);
      }
    );
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.checkResult(this.answers).then(finalAnswer => {
        this.finished = true;
        this.answerSelected = this.quizData.results[finalAnswer as keyof typeof this.quizData.results];
      });
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if (arr.filter(item => item === previous).length > arr.filter(item => item === current).length) {
        return previous;
      } else {
        return current;
      }
    });

    return result;
  }
}

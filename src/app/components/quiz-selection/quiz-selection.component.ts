import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../../services/json-loader.service';
import { of } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css'],
})

export class QuizSelectionComponent implements OnInit {
  title: string = "";
  numberOfQuizzes: number = 10;

  constructor(private jsonLoader: JsonLoaderService) {}

  ngOnInit() {
    for (let i = 1; i <= this.numberOfQuizzes; i++) {
      const file = `/assets/data/quizz_${i}.json`;

      this.jsonLoader.loadJsonFile(file).subscribe({
        next: (data) => {
          if (data && data.title) {
            this.title += `${data.title} `;
          }
        },
        error: (err) => {
          console.error('Erro ao carregar arquivo JSON:', err);
        }
      });
    }
  }
}


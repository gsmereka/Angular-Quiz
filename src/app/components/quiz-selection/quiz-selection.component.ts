import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../../services/json-loader.service';
import { EMPTY, firstValueFrom, of } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { FileExistsService } from '../../services/file-exists.service';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css'],
})

export class QuizSelectionComponent implements OnInit {
  title: string = '';
  numberOfQuizzes: number = 10;
  private path: string = 'assets/data/quizz_';

  constructor(
    private jsonLoader: JsonLoaderService,
    private fileExistsService: FileExistsService
  ) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  private async loadQuizzes(): Promise<void> {
    for (let i = 1; i <= this.numberOfQuizzes; i++) {
      const file = `${this.path}${i}.json`;
      const exists = await this.checkFileExists(file);
      if (!exists) {
        return;
      }
      this.jsonLoader.loadJsonFile(file).subscribe({
        next: (data) => {
          if (data?.title) {
            this.title += `${data.title} `;
          }
        },
        error: (err) => {
          console.error('Erro ao carregar arquivo JSON:', err);
        }
      });
    }
  }

  async checkFileExists(pathFile: string): Promise<boolean> {
    try {
      return await firstValueFrom(this.fileExistsService.fileExistsService(pathFile));
    } catch (error) {
      console.error('Erro ao verificar o arquivo:', error);
      return false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../../services/json-loader.service';
import { firstValueFrom } from 'rxjs';
import { FileExistsService } from '../../services/file-exists.service';
import { QuizButtonComponent } from './quiz-button/quiz-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css'],
  imports: [QuizButtonComponent, CommonModule]
})

export class QuizSelectionComponent implements OnInit {
  quizzes: { title: string; imgPath: string; id: String}[] = [];
  numberOfQuizzes: number = 100;
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
        return
      }
      this.jsonLoader.loadJsonFile(file).subscribe({
        next: (data) => {
            this.quizzes.push({ title: data.title, imgPath: data.imgPath, id: i.toString() });
        },
        error: (err) => {}
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

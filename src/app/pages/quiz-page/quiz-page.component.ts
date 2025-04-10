import { Component } from '@angular/core';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  imports: [QuizComponent, RouterModule],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent {

}

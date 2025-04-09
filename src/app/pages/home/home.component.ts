import { Component } from '@angular/core';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { QuizSelectionComponent } from "../../components/quiz-selection/quiz-selection.component";

@Component({
  selector: 'app-home',
  imports: [QuizComponent, QuizSelectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

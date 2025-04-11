import { Component, Input, OnInit } from '@angular/core';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  imports: [QuizComponent, RouterModule],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent implements OnInit{

  quizid: String = ""

    constructor (private activeRoute: ActivatedRoute){

    }
    
    ngOnInit(): void {
      this.activeRoute.params.subscribe(
        res => this.quizid = res['quiz_id']
      )
    }
}

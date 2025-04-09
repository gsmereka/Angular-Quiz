import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-button',
  imports: [],
  templateUrl: './quiz-button.component.html',
  styleUrl: './quiz-button.component.css'
})
export class QuizButtonComponent implements OnInit {
  constructor () {}

  ngOnInit(): void {
    
  }
  @Input()
  title: String = ""

  @Input()
  imgPath: String = ""
}

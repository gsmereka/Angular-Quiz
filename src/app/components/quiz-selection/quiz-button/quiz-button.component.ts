import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-button',
  imports: [RouterModule],
  templateUrl: './quiz-button.component.html',
  styleUrl: './quiz-button.component.css'
})
export class QuizButtonComponent implements OnInit {
  constructor () {}

  ngOnInit(): void {
    // console.log(this.imgPath)
  }

  ngOnChange(): void {
    // console.log(this.imgPath)
  }

  @Input()
  title: String = ""

  @Input()
  imgPath: String = ""
}

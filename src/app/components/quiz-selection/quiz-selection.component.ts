import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from '../../services/json-loader.service';

@Component({
  selector: 'app-quiz-selection',
  imports: [],
  templateUrl: './quiz-selection.component.html',
  styleUrl: './quiz-selection.component.css'
})

export class QuizSelectionComponent implements OnInit {
  items: any[] = [];
  item: String = "";
  jason: any;

  constructor(private jsonLoader: JsonLoaderService) {}

  ngOnInit() {
    this.jsonLoader.loadJsonFile('/assets/data/rpg-class.json').subscribe({
      next: (data) => {
        this.jason = data;
        // Agora é seguro acessar o atributo 'title'
        this.item = this.jason.title;  // Atribui o valor de 'title' após o carregamento
      },
      error: (err) => console.error('Erro ao carregar arquivo JSON', err),
    });
  }
}

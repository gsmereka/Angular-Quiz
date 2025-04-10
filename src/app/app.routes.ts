import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'path', component: QuizComponent }
  ];
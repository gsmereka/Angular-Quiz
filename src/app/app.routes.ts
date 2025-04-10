import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'quiz', component: QuizPageComponent }
  ];
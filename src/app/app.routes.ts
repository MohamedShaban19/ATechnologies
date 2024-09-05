import { Routes } from '@angular/router';
import { HouseParentComponent } from './views/pages/house-parent/house-parent.component';
import { SelectionComponent } from './views/pages/selection/selection.component';
import { SelectionHouseComponent } from './views/pages/selection-house/selection-house.component';
import { ProbComponent } from './views/pages/prob/prob.component';
import { NextProbComponent } from './views/pages/next-prob/next-prob.component';
import { SubmissionComponent } from './views/pages/submission/submission.component';
import { SubmissionConfirmComponent } from './views/pages/submission-confirm/submission-confirm.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'house-parent',
    pathMatch: 'full'
  },
  {
    path: 'house-parent',
    component: HouseParentComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'selection',
    component: SelectionComponent,
    data: { title: 'Selection Page' }
  },
  {
    path: 'selection-house',
    component: SelectionHouseComponent,
    data: { title: 'Selection house Page' }
  },
  {
    path: 'prob',
    component: ProbComponent,
    data: { title: ' Prob Page' }
  },
  {
    path: 'next-prob',
    component: NextProbComponent,
    data: { title: ' Next Prob Page' }
  },
  {
    path: 'submission',
    component: SubmissionComponent,
    data: { title: ' Submission  Page' }
  },
  {
    path: 'submission-confirm',
    component: SubmissionConfirmComponent,
    data: { title: ' submission-confirm  Page' }
  },
  {
    path: '**',
    redirectTo: 'house-parent'
  }
];

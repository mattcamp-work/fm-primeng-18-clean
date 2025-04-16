import { Routes } from '@angular/router';

import { PrimengCompsComponent } from '~/app/pages/primeng-comps/primeng-comps.component';
import { TokensComponent } from '~/app/pages/tokens/tokens.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tokens', pathMatch: 'full' }, // Redirect root to '/components'
  { path: 'components', component: PrimengCompsComponent },  // Matches '/components'
  { path: 'tokens', component: TokensComponent }  // Matches '/tokens'
];






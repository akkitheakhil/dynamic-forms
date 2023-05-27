import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container">
    <h1 class="title">404 | The Page you are looking for is not found</h1>
  </div> `,
  styles: [
    `
      .container {
        display: flex;
        justify-items: center;
        align-items: center;
        height: 100dvh;
        width: 100dvw;
        padding: 2rem;
      }
      .title {
        text-align: center;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}

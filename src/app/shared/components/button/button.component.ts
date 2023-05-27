import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type ButtonAppearance = 'primary' | 'secondary';

type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({ required: true }) label = '';
  @Input() appearance: ButtonAppearance = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
}

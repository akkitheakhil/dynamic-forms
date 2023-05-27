import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export type ErrorLabels = { [key in string]: string };

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  protected object = Object;

  @Input({ required: true }) label: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) type: 'text' | 'checkbox' | 'email' = 'text';
  @Input({ required: true }) control: FormControl = new FormControl();
  @Input() errorLabels: ErrorLabels = {};
}

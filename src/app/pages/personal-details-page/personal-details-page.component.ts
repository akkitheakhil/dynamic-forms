import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PersonalDetailsFormComponent } from './components/personal-details-form/personal-details-form.component';
import { PersonalDetailsFacadeService } from './services/personal-details-facade.service';

@Component({
  selector: 'app-personal-details-page',
  standalone: true,
  imports: [CommonModule, PersonalDetailsFormComponent],
  templateUrl: './personal-details-page.component.html',
  styleUrls: ['./personal-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsPageComponent {
  private readonly facadeService = inject(PersonalDetailsFacadeService);

  protected personalDetailsForm$ = this.facadeService.personalDetailsForm();
}

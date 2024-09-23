import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    class: 'min-h-dvh flex flex-col bg-gray-100',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

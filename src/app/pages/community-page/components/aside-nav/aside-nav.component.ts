import { Component, inject, output } from '@angular/core';
import { BrandNameSignalService } from '../../../../services/brandNameSignal/brand-name-signal.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss',
})
export class AsideNavComponent {
  public brandName = inject(BrandNameSignalService).brand_name();

  toggleSearch = output<boolean>();
openSearchBar = false;

  toggleSearchBar() {
    this.openSearchBar = !this.openSearchBar;
    this.toggleSearch.emit(this.openSearchBar);
  }
}

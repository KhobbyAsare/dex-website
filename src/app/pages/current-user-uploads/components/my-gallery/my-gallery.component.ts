import { HttpClient } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  OnInit,
  SimpleChanges,
  inject,
  input,
} from '@angular/core';
import { imageArray } from '../../../gallery/components/cards/images';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-gallery.component.html',
  styleUrl: './my-gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyGalleryComponent implements OnInit {
  private http = inject(HttpClient);
  searchQuery = input<string>();
  isPreview: boolean = false;

  imageArray: {
    id: number;
    src: string;
    filename: string;
  }[] = [];

  ngOnInit(): void {
    // this.imageArray = imageArray;

    this.loadImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.filterData();
    }
  }

  filterData() {
    if (this.searchQuery()) {
      this.imageArray = imageArray.filter((img) =>
        img.filename.includes(this.searchQuery() as string)
      );

      return;
    }

    this.imageArray = imageArray;
  }

  downloadImage(img: { src: string; filename: string }, event: Event) {
    event.stopPropagation();
    this.http.get(img.src, { responseType: 'blob' }).subscribe((blob) => {
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = img.filename;
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  isLoading: boolean = false;
  private page: number = 1;
  private pageSize: number = 20; // Number of items to load per page
  public hasMore: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadMore();
    }
  }

  loadImages(): void {
    // Initial load
    this.imageArray = imageArray.slice(0, this.pageSize * this.page);
  }

  loadMore(): void {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    // Simulate an API call
    setTimeout(() => {
      const moreImages = imageArray.slice(
        this.pageSize * (this.page - 1),
        this.pageSize * this.page
      );
      if (moreImages.length === 0) {
        this.hasMore = false; // No more items to load
      } else {
        this.page++;
        this.imageArray = [...this.imageArray, ...moreImages];
      }
      this.isLoading = false;
    }, 2000); // Delay to simulate network latency
  }
}

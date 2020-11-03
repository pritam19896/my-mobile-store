import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../products/services/product.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating = 4;
  @Output() ratingClick = new EventEmitter<number>();

  starIcon = faStar;
  starWidth = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    // console.log('In OnInit');
    /* this.productService.getNumbers().subscribe(data => {
      console.log('Star Component -> ', data);
    }); */
  }

  ngOnChanges() {
    this.starWidth = this.rating * 18;
    // console.log('In OnChanges');
  }

  onClick() {
    this.ratingClick.emit(this.rating);
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  standalone: true
})
export class ProductItemComponent {
  @Input() product!: Products;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }

  shareWhatsApp(link: string) {
    window.open('https://wa.me/?text=' + encodeURIComponent(link), '_blank');
  }

  shareTelegram(link: string) {
    window.open('https://t.me/share/url?url=' + encodeURIComponent(link), '_blank');
  }

  deleteProduct() {
    this.remove.emit(this.product.id);
  }
}
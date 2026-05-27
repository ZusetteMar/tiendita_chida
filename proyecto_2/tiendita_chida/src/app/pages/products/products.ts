import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewProduct } from '../../components/newProduct/newProduct';

@Component({
  selector: 'app-products',
  imports: [NewProduct],
  templateUrl: './products.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  isModalOpen = false;

  handleProductSave() {
    console.log('Guardando producto...');
  }
}

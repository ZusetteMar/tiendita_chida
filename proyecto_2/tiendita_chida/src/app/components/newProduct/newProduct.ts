import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-product',
  imports: [],
  template: `@if (isOpen) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
        
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all">
          
          <div class="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 class="text-xl font-bold text-gray-800">Agregar Nuevo Producto</h3>
            <button (click)="close.emit()" class="text-gray-400 hover:text-gray-600 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="px-6 py-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div class="col-span-1 sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del producto</label>
                <input type="text" placeholder="Ej. Laptop HP Envy" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                <input type="text" placeholder="Ej. Electrónica" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                  <input type="number" placeholder="0.00" 
                    class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Stock inicial</label>
                <input type="number" placeholder="0" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Proveedor</label>
                <input type="text" placeholder="Nombre del proveedor" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
              </div>

              <div class="col-span-1 sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white">
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                  <option value="agotado">Agotado</option>
                </select>
              </div>

            </div>
          </div>

          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
            <button (click)="close.emit()" 
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors">
              Cancelar
            </button>
            <button (click)="onSave()" 
              class="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors">
              Guardar Producto
            </button>
          </div>

        </div>
      </div>
    }`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProduct {
  @Input() isOpen: boolean = false;
  
  // Emite un evento cuando el usuario quiere cerrar el modal
  @Output() close = new EventEmitter<void>();

  // Emite un evento cuando se guarda (puedes tiparlo con una interfaz de producto luego)
  @Output() save = new EventEmitter<any>();

  onSave() {
    // Aquí puedes capturar los valores de los inputs (usando ReactiveForms o ngModel)
    // y emitirlos al componente padre.
    this.save.emit();
    this.close.emit();
}
}

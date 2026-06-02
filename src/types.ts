export interface Product {
  id: string;
  name: string;
  price: number;
  size: string;
  description: string;
  category: 'Clásicos' | 'Premium';
  bleedColor: string;
  tagColor: string;
  textColor: string;
  label: string;
  info: string;
  isFavorite?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrder {
  name: string;
  address: string;
  phone: string;
  notes?: string;
  paymentMethod: 'Efectivo' | 'Transferencia' | 'Tarjeta';
}

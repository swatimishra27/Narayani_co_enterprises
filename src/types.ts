export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'construction' | 'building' | 'safety' | 'industrial';
}

export interface NavItem {
  label: string;
  href: string;
}

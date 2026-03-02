export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'building' | 'safety' | 'general';
}

export interface NavItem {
  label: string;
  href: string;
}

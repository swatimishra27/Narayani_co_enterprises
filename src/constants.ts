import { Product } from './types';

export const PRODUCTS: Product[] = [
  // Building Materials
  {
    id: 'b1',
    name: 'Premium Cement',
    description: 'High-strength cement suitable for all types of construction projects.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b2',
    name: 'TMT Steel Bars',
    description: 'Corrosion-resistant TMT bars with superior bonding strength.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', // Placeholder
    category: 'building'
  },
  {
    id: 'b3',
    name: 'Aggregates',
    description: 'High-quality crushed stone aggregates for concrete and road construction.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b4',
    name: 'Crushed Sand',
    description: 'Clean, graded crushed sand for superior masonry and plastering.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  // Safety Materials
  {
    id: 's1',
    name: 'Safety Jackets',
    description: 'High-visibility reflective jackets for site safety.',
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f71?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's2',
    name: 'Safety Shoes',
    description: 'Steel-toe safety shoes with slip-resistant soles.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's3',
    name: 'Fire Extinguishers',
    description: 'Industrial-grade fire safety equipment for all environments.',
    image: 'https://images.unsplash.com/photo-1618414466011-09571046cb1e?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's4',
    name: 'Safety Belts & Harnesses',
    description: 'Full-body harnesses for fall protection at heights.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's5',
    name: 'Industrial Helmets',
    description: 'Durable hard hats for head protection on construction sites.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  // General Materials
  {
    id: 'g1',
    name: 'Industrial Tools',
    description: 'A wide range of hand and power tools for industrial use.',
    image: 'https://images.unsplash.com/photo-1581244276891-833938de383d?auto=format&fit=crop&q=80&w=800',
    category: 'general'
  },
  {
    id: 'g2',
    name: 'Hardware Supplies',
    description: 'Essential hardware materials for construction and maintenance.',
    image: 'https://images.unsplash.com/photo-1530124566582-aa61dd3c9dff?auto=format&fit=crop&q=80&w=800',
    category: 'general'
  }
];

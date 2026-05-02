import { Product } from './types';

export const PRODUCTS: Product[] = [
  // Construction Materials
  {
    id: 'c1',
    name: 'Cement',
    description: 'Supply of quality cement suitable for residential, commercial, and infrastructure construction projects.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800',
    category: 'construction'
  },
  {
    id: 'c2',
    name: 'Sand',
    description: 'Supply of construction sand used for concrete preparation, plastering, and masonry work.',
    image: 'https://images.unsplash.com/photo-1509479200622-4503f27f12ef?auto=format&fit=crop&q=80&w=800',
    category: 'construction'
  },
  {
    id: 'c3',
    name: 'Aggregates',
    description: 'Supply of aggregates required for concrete production and structural construction applications.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80&w=800',
    category: 'construction'
  },
  {
    id: 'c4',
    name: 'Concrete Products',
    description: 'Supply of precast and concrete-based materials used in construction and infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800',
    category: 'construction'
  },
  {
    id: 'c5',
    name: 'Precast Items',
    description: 'Supply of precast concrete items used in drainage systems, infrastructure works, and construction applications.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800',
    category: 'construction'
  },

  // Building Materials
  {
    id: 'b1',
    name: 'Bricks',
    description: 'Supply of quality bricks used for masonry construction in residential, commercial, and infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1587582345426-bf07f534b9b4?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b2',
    name: 'Blocks',
    description: 'Supply of concrete blocks and other masonry blocks used for structural and partition wall construction.',
    image: 'https://images.unsplash.com/photo-1590401869375-926c813589c3?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b3',
    name: 'TMT Steel Bars',
    description: 'Supply of TMT steel bars used for reinforced concrete structures and structural construction.',
    image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b4',
    name: 'Tiles and Flooring Materials',
    description: 'Supply of tiles and flooring materials suitable for residential, commercial, and industrial spaces.',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01d0?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b5',
    name: 'Pipes and Fittings',
    description: 'Supply of pipes and fittings used in plumbing, drainage, and construction infrastructure systems.',
    image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },
  {
    id: 'b6',
    name: 'Waterproofing Materials',
    description: 'Supply of waterproofing materials used for protecting structures from water penetration and moisture damage.',
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&q=80&w=800',
    category: 'building'
  },

  // Safety Equipment
  {
    id: 's1',
    name: 'Safety Helmets',
    description: 'Supply of protective helmets used to safeguard workers from head injuries in construction and industrial work environments.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's2',
    name: 'Reflective Safety Jackets',
    description: 'Supply of high-visibility reflective jackets designed to improve worker visibility and safety on construction sites.',
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f71?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's3',
    name: 'Safety Gloves',
    description: 'Supply of protective gloves used to ensure safe handling of construction materials and equipment.',
    image: 'https://images.unsplash.com/photo-1616423588998-f2b3ec325e1a?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's4',
    name: 'Safety Shoes',
    description: 'Supply of safety shoes designed to protect workers from impact, slips, and workplace hazards.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's5',
    name: 'Safety Harness',
    description: 'Supply of safety harness equipment used for working at heights and fall protection in construction and industrial environments.',
    image: 'https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },
  {
    id: 's6',
    name: 'Construction Safety Accessories',
    description: 'Supply of additional safety items such as protective goggles, safety cones, caution tapes, and other safety accessories required on project sites.',
    image: 'https://images.unsplash.com/photo-1618414466011-09571046cb1e?auto=format&fit=crop&q=80&w=800',
    category: 'safety'
  },

  // Industrial Supplies
  {
    id: 'i1',
    name: 'Hardware Materials',
    description: 'Provide dependable supply of hardware items for structural operations.',
    image: 'https://images.unsplash.com/photo-1530124566582-aa61dd3c9dff?auto=format&fit=crop&q=80&w=800',
    category: 'industrial'
  },
  {
    id: 'i2',
    name: 'Fasteners',
    description: 'A robust selection of fastening solutions necessary for stable industrial structures.',
    image: 'https://images.unsplash.com/photo-1622283084224-811cff72173f?auto=format&fit=crop&q=80&w=800',
    category: 'industrial'
  },
  {
    id: 'i3',
    name: 'Anchors',
    description: 'High-strength anchoring tools and accessories for heavy duty placements.',
    image: 'https://images.unsplash.com/photo-1611077755877-3e1dc8df2a26?auto=format&fit=crop&q=80&w=800',
    category: 'industrial'
  },
  {
    id: 'i4',
    name: 'Construction Tools',
    description: 'A wide range of hand and power tools essential for efficient industrial and construction processes.',
    image: 'https://images.unsplash.com/photo-1581244276891-833938de383d?auto=format&fit=crop&q=80&w=800',
    category: 'industrial'
  },
  {
    id: 'i5',
    name: 'General Industrial Items',
    description: 'Supply of additional hardware, construction tools, and industrial items depending on customer requirements.',
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864be05?auto=format&fit=crop&q=80&w=800',
    category: 'industrial'
  }
];

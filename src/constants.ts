import { Product } from './types';
import bricksImg from './assets/bricks.png'

export const PRODUCTS: Product[] = [
  // Construction Materials
  {
    id: 'c1',
    name: 'Cement',
    description: 'Supply of quality cement suitable for residential, commercial, and infrastructure construction projects.',
    image: 'https://plus.unsplash.com/premium_photo-1682366278661-1096d176d96f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'construction'
  },
  {
    id: 'c2',
    name: 'Sand',
    description: 'Supply of construction sand used for concrete preparation, plastering, and masonry work.',
    image: 'https://images.unsplash.com/photo-1694521788304-1d42378498da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'construction'
  },
  {
    id: 'c3',
    name: 'Aggregates',
    description: 'Supply of aggregates required for concrete production and structural construction applications.',
    image: 'https://plus.unsplash.com/premium_photo-1661913004501-220bca6b31ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'construction'
  },
  {
    id: 'c4',
    name: 'Concrete Products',
    description: 'Supply of precast and concrete-based materials used in construction and infrastructure projects.',
    image: 'https://plus.unsplash.com/premium_photo-1723795295395-1c67ca43d0c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'construction'
  },
  {
    id: 'c5',
    name: 'Precast Items',
    description: 'Supply of precast concrete items used in drainage systems, infrastructure works, and construction applications.',
    image: 'https://images.unsplash.com/photo-1653280668407-50b18ec4ef42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'construction'
  },

  // Building Materials
  {
    id: 'b1',
    name: 'Bricks',
    description: 'Supply of quality bricks used for masonry construction in residential, commercial, and infrastructure projects.',
    image: bricksImg,
    category: 'building'
  },
  {
    id: 'b2',
    name: 'Blocks',
    description: 'Supply of concrete blocks and other masonry blocks used for structural and partition wall construction.',
    image: 'https://images.unsplash.com/photo-1659670988949-aadadcdd253f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'building'
  },
  {
    id: 'b3',
    name: 'TMT Steel Bars',
    description: 'Supply of TMT steel bars used for reinforced concrete structures and structural construction.',
    image: 'https://plus.unsplash.com/premium_photo-1682148002213-e56d6ebff163?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'building'
  },
  {
    id: 'b4',
    name: 'Tiles and Flooring Materials',
    description: 'Supply of tiles and flooring materials suitable for residential, commercial, and industrial spaces.',
    image: 'https://plus.unsplash.com/premium_photo-1682088053289-cb286ef69a99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'building'
  },
  {
    id: 'b5',
    name: 'Pipes and Fittings',
    description: 'Supply of pipes and fittings used in plumbing, drainage, and construction infrastructure systems.',
    image: 'https://plus.unsplash.com/premium_photo-1683141410787-c4dbd2220487?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'building'
  },
  {
    id: 'b6',
    name: 'Waterproofing Materials',
    description: 'Supply of waterproofing materials used for protecting structures from water penetration and moisture damage.',
    image: 'https://images.unsplash.com/photo-1548346835-0345c02743f2?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'building'
  },

  // Safety Equipment
  {
    id: 's1',
    name: 'Safety Helmets',
    description: 'Supply of protective helmets used to safeguard workers from head injuries in construction and industrial work environments.',
    image: 'https://plus.unsplash.com/premium_photo-1721832786188-906b9b08a0c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'safety'
  },
  {
    id: 's2',
    name: 'Reflective Safety Jackets',
    description: 'Supply of high-visibility reflective jackets designed to improve worker visibility and safety on construction sites.',
    image: 'https://plus.unsplash.com/premium_photo-1721460167407-88871e334fc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'safety'
  },
  {
    id: 's3',
    name: 'Safety Gloves',
    description: 'Supply of protective gloves used to ensure safe handling of construction materials and equipment.',
    image: 'https://images.unsplash.com/photo-1690473768383-a1f56b6f92c9?q=80&w=902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'safety'
  },
  {
    id: 's4',
    name: 'Safety Shoes',
    description: 'Supply of safety shoes designed to protect workers from impact, slips, and workplace hazards.',
    image: 'https://images.unsplash.com/photo-1653868250317-144a0c4f5884?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'safety'
  },
  {
    id: 's5',
    name: 'Safety Harness',
    description: 'Supply of safety harness equipment used for working at heights and fall protection in construction and industrial environments.',
    image: 'https://images.unsplash.com/photo-1768310625494-908da4aa66ff?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'safety'
  },
  {
    id: 's6',
    name: 'Construction Safety Accessories',
    description: 'Supply of additional safety items such as protective goggles, safety cones, caution tapes, and other safety accessories required on project sites.',
    image: 'https://images.unsplash.com/photo-1742730710379-b137fdd08f5e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'safety'
  },

  // Industrial Supplies
  {
    id: 'i1',
    name: 'Hardware Materials',
    description: 'Provide dependable supply of hardware items for structural operations.',
    image: 'https://images.unsplash.com/photo-1702200047649-ddefe9d4faa9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'industrial'
  },
  {
    id: 'i2',
    name: 'Fasteners',
    description: 'A robust selection of fastening solutions necessary for stable industrial structures.',
    image: 'https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'industrial'
  },
  {
    id: 'i3',
    name: 'Anchors',
    description: 'High-strength anchoring tools and accessories for heavy duty placements.',
    image: 'https://images.unsplash.com/photo-1564226591723-659ff3852b2a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'industrial'
  },
  {
    id: 'i4',
    name: 'Construction Tools',
    description: 'A wide range of hand and power tools essential for efficient industrial and construction processes.',
    image: 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'industrial'
  },
  {
    id: 'i5',
    name: 'General Industrial Items',
    description: 'Supply of additional hardware, construction tools, and industrial items depending on customer requirements.',
    image: 'https://images.unsplash.com/photo-1649777689164-c4ad5dd3a83c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'industrial'
  }
];

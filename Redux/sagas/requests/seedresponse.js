export const seedFeatureRepose = [
  {
    id: 3,
    feature: 'Performance',
    price: 269000,
  },
  {
    id: 4,
    feature: 'Long Range',
    price: 246000,
  },
];
export const seedColorResponse = {
  car_id: '2',
  colors: [
    {
      baseColor: true,
      colorName: 'Pearl White',
      colorValue: '#fff',
      id: 2,
      price: null,
    },
    {
      baseColor: false,
      colorName: 'Solid Black',
      colorValue: '#474747',
      id: 6,
      price: '4500',
    },
    {
      baseColor: false,
      colorName: 'Midnight Silver',
      colorValue: '#45525C',
      id: 10,
      price: '6000',
    },
    {
      baseColor: false,
      colorName: 'Deep Blue',
      colorValue: '#044BB6',
      id: 18,
      price: '6000',
    },
    {
      baseColor: false,
      colorName: 'Red Multi-Coat',
      colorValue: '#D01000',
      id: 22,
      price: '6000',
    },
  ],
};

export const seedAutoPilotResponse = {
  autopilot_options: [
    {
      id: 3,
      description: 'Auto Pilot',
      price: '14000',
    },
    {
      id: 4,
      description: 'Full Self-driving',
      price: '28000',
    },
  ],
  car_id: '2',
};

export const seedInteriorPriceResponse = {
  interior_features: [
    {
      id: 3,
      description: 'All Black',
      option_included: true,
      price: null,
      color: '#f5f7fa',
    },
    {
      id: 4,
      description: 'Black & White',
      option_included: false,
      price: 4500,
      color: '#000',
    },
  ],
  car_id: '2',
};

export const seedAutoPilotPriceResponse = {
  autopilot_options: [
    {
      id: 3,
      description: 'Auto Pilot',
      price: '14000',
    },
    {
      id: 4,
      description: 'Full Self-driving',
      price: '28000',
    },
  ],
  car_id: '2',
};

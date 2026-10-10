export interface Location {
  name: string;
  description?: string;
}

// Add the places where Osoyet works. The description is optional.
export const locations: Location[] = [
  { name: 'Olulunga' },
  { name: 'Narok', description: 'The wider area covered.' },
];
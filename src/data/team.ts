export interface TeamMember {
  name: string;
  role: string;
  photo?: string; // e.g. '/images/jane.jpg' (file goes in public/images)
}

// Delete all items to hide the section.
export const team: TeamMember[] = [
  { name: 'Stanley Kamakei Sankei', role: 'CEO', photo: '/images/ceo.jpg' },
];
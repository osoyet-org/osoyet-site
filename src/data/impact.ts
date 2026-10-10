export interface ImpactStat {
  value: string;
  label: string;
}

// Use only real numbers Osoyet can back up. Delete all items to hide the section.
export const impact: ImpactStat[] = [
  { value: '10,000', label: 'Trees planted (replace)' },
  { value: '5,000', label: 'Young people mentored (replace)' },
  { value: '10', label: 'Community events held (replace)' },
  { value: '100', label: 'Schools' },
  { value: '50', label: 'Health centres' },
];
export interface Program {
  slug: string;
  title: string;
  summary: string;
  about: string;
  activities: string[];
  image?: string;
}

export const programs: Program[] = [
  {
    slug: 'healthcare',
    image: '/images/health-centre-team.jpg',
    title: 'Healthcare and community wellness',
    summary: 'Health interventions that bring care and information closer to the people who need it.',
    about: 'We work with local people to improve access to healthcare and health information, so that families can look after their well-being and get help early.',
    activities: ['Community health talks and awareness days', 'Health screening and referral support', 'Working with local clinics and health workers'],
  },
  {
    slug: 'environment',
    image: '/images/tree-planting-team.jpg',
    title: 'Environmental conservation',
    summary: 'Community-led activities that protect the land, water and trees we share.',
    about: 'Healthy communities depend on a healthy environment. We involve residents in protecting the land, water and trees around them.',
    activities: ['Tree planting and care', 'Community clean-up drives', 'Environmental education in schools and villages'],
  },
  {
    slug: 'youth',
    title: 'Youth mentorship and empowerment',
    summary: 'Mentorship programs that help young people build confidence and find opportunity.',
    about: 'We walk alongside young people, helping them build confidence, make good decisions and find opportunities to grow.',
    activities: ['One-on-one and group mentorship', 'Career and life-skills talks', 'Youth-led community projects'],
  },
  {
    slug: 'sports',
    title: 'Sports and talent development',
    summary: 'Sport that nurtures talent and brings people together.',
    about: 'Sport builds teamwork, discipline and friendship. We use it to nurture talent and to bring different groups together.',
    activities: ['Community tournaments and sports days', 'Coaching and talent identification', 'Sports events that promote peace and unity'],
  },
  {
    slug: 'peace',
    title: 'Peace and community cohesion',
    summary: 'Dialogue and shared activities that strengthen peace and unity.',
    about: 'Osoyet means peace. We create spaces where people talk, listen and work together, so that communities stay united.',
    activities: ['Community dialogues and peace forums', 'Joint activities across groups', 'Training community peace ambassadors'],
  },
  {
    slug: 'education',
    title: 'Education and skills development',
    summary: 'Learning and practical skills that open doors to work and growth.',
    about: 'We help people gain knowledge and practical skills that lead to work, income and growth for themselves and their communities.',
    activities: ['Skills training workshops', 'Learning support for students', 'Partnerships with schools and training institutions'],
  },
];
export interface NewsItem {
  title: string;
  date: string;
  summary: string;
}

// Add news here. Newest first. Example:
// { title: 'Tree planting day', date: '12 October 2026', summary: 'Volunteers planted 200 trees.' },
export const news: NewsItem[] = [];
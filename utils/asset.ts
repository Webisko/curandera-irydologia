export function asset(path: string): string {
  const clean = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || '/';
  return base + clean;
}

// Usage examples:
// <img src={asset('images/example.jpg')} alt="..." />
// backgroundImage: `url(${asset('images/bg.png')})`

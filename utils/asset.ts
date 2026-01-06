export function asset(path: string): string {
  const clean = path.replace(/^\/+/, '');
  return new URL(clean, import.meta.env.BASE_URL).toString();
}

// Usage examples:
// <img src={asset('images/example.jpg')} alt="..." />
// backgroundImage: `url(${asset('images/bg.png')})`

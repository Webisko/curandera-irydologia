# Paleta kolorów - Curandera Irydologia

## 🎨 Kolory brandowe (Curandera)

### Kolory główne
| Nazwa | Wartość HEX | Tailwind Class | Zastosowanie |
|-------|-------------|----------------|--------------|
| **Background** | `#FFFEFC` | `bg-curandera-bg` | Główne tło strony, białe tło kart |
| **Dark** | `#030303` | `text-curandera-dark` | Ciemny tekst, przyciski, scroll-to-top |
| **Accent** | `#FBBC4E` | `bg-curandera-accent` | Kolor akcent (złoty), hover, ikony procesu, checkmarks |
| **Alt Background** | `#F9F2E8` | `bg-curandera-alt` | Alternatywne tło sekcji, header scrolled, footer |

### Kolory semantyczne
| Nazwa | Wartość HEX | Tailwind Class | Zastosowanie |
|-------|-------------|----------------|--------------|
| **Primary** | `#BE5705` | `text-curandera-primary` | Główne nagłówki (h1, h2), checkbox borders, strzałki carousel |
| **Secondary** | `#A30000` | `text-curandera-secondary` | Drugorzędne nagłówki (h3), autor opinii, Webisko link |
| **Body** | `#363636` | `text-curandera-body` | Tekst body, treść paragrafów, wszystkie ciemne teksty |

---

## 🌈 Kolory systemowe (Tailwind)

### Neutralne
| Kolor | Gdzie używany |
|-------|---------------|
| `white` | Biały tekst na ciemnym tle (Hero, przyciski), ikony, hovery |
| `transparent` | Przezroczyste tła (header top, scroll-to-top) |

### Stone (neutralne odcienie)
| Odcień | Tailwind Class | Gdzie używany |
|--------|----------------|---------------|
| Stone 200 | `border-stone-200` | Obramowania (Footer, Pricing cards) |

---

## 📊 Mapa użycia kolorów

### Navigation
- **Top (transparent)**: 
  - Tło: `bg-transparent`
  - Logo: light version (białe)
  - Tekst linków: `text-white`, hover: `text-curandera-accent`
  - Hamburger: `text-white`
- **Scrolled**: 
  - Tło: `bg-curandera-alt/95`
  - Logo: dark version
  - Tekst linków: `text-curandera-dark`, hover: `text-curandera-accent`
  - Hamburger: `text-curandera-dark`
- **Przycisk**: `bg-curandera-dark text-white`, hover: `bg-curandera-accent`

### Problem
- Nagłówek: `text-curandera-primary`
- Pytajniki: `text-curandera-accent`
- Tekst: `text-curandera-dark/80`

### ForWhom (Czy irydologia online jest dla mnie?)
- Nagłówek: `text-curandera-secondary`
- **Lewa karta (dla Ciebie)**:
  - Tło: `bg-white`
  - Border: `border-t-4 border-curandera-accent`
  - Ikona: `bg-curandera-accent text-white`
  - Checkmark: `text-curandera-accent`
- **Prawa karta (nie jest dla Ciebie)**:
  - Tło: `bg-white`
  - Border: `border-t-4 border-curandera-dark`
  - Ikona: `bg-curandera-body text-white`
  - X ikona: `text-curandera-body`

### Process
- Tło sekcji: `bg-curandera-bg`
- Nagłówek: `text-curandera-primary`
- Ikony (okrąg): `bg-curandera-accent` z białą ikoną wewnątrz
- Tytuły kroków: `text-curandera-secondary`
- Tekst: `text-curandera-body`
- Linia (desktop): `bg-curandera-secondary/20`

### About
- Tło sekcji: `bg-curandera-alt`
- Karta tekstowa: `bg-curandera-bg`
- Label: `text-curandera-accent`
- Nagłówek główny: `text-curandera-primary`
- Subtitle: `text-curandera-dark`, border: `border-curandera-accent`
- Tekst: `text-curandera-body`

### FAQ
- Nagłówek: `text-curandera-primary`
- Pytanie ikona: `text-curandera-accent`
- Pytanie tekst: `text-curandera-secondary`
- Odpowiedź: `text-curandera-body`

### Testimonials
- Tło sekcji: `bg-curandera-alt`
- Nagłówek: `text-curandera-primary`
- Karty: `bg-curandera-bg`
- Gwiazdki: `text-curandera-accent`
- Tekst opinii: `text-curandera-body`
- Autor: `text-curandera-secondary`
- Strzałki: `border-curandera-primary text-curandera-primary`, hover: `bg-curandera-primary text-white`
- Expand button: `text-curandera-primary`, hover: `text-curandera-accent`

### Pricing
- Tło sekcji: `bg-curandera-bg`
- Nagłówek: `text-curandera-primary`
- Subtitle: `text-curandera-dark/70`
- Karty: `bg-curandera-bg`
  - Standardowa: `border-stone-200`
  - Rekomendowana: `border-curandera-accent/30`
- Badge "Polecany": `bg-curandera-accent text-white`
- Cena: `text-curandera-accent`
- Opis: `text-curandera-dark/70`
- Lista elementów: `text-curandera-dark/80`
- Checkbox border: `border-curandera-primary`, tło: `bg-white`
- Divider: `border-stone-100`
- Toggle details: `text-curandera-dark/60`, hover: `text-curandera-accent`
- Description box: `bg-curandera-alt`, `text-curandera-body`

### Footer
- Tło: `bg-curandera-alt`
- Border top: `border-stone-200`
- Disclaimer box:
  - Border: `border-curandera-accent/30`
  - Tło: `bg-curandera-bg`
  - Nagłówek: `text-curandera-primary`
  - Tekst: `text-curandera-body`
- Webisko link: `text-curandera-secondary`, hover: `text-curandera-accent`

### Scroll to Top
- Border: `border-curandera-dark`
- Ikona: `text-curandera-dark`
- Tło: `bg-transparent`
- Hover: `bg-curandera-dark text-white`

### Button Component
- Tło: `bg-curandera-dark`
- Border: `border-curandera-dark`
- Tekst: `text-white`
- Hover: `bg-white text-curandera-dark`

---

## ✅ Kolory w użyciu

### Kolory Curandera (7)
1. `bg-curandera-bg` - #FFFEFC
2. `text-curandera-dark` - #030303
3. `bg-curandera-accent` / `text-curandera-accent` - #FBBC4E
4. `bg-curandera-alt` - #F9F2E8
5. `text-curandera-primary` - #BE5705
6. `text-curandera-secondary` - #A30000
7. `text-curandera-body` - #363636

### Kolory systemowe (2)
1. `white` - tekst na ciemnym tle, ikony
2. `transparent` - tła

### Stone (1)
1. `border-stone-200` - obramowania

### Transparencja
- Używane: `/20`, `/30`, `/50`, `/60`, `/70`, `/80`, `/95`

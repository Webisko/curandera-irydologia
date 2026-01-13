# Typografia - Curandera

## Czcionka
Wszystkie elementy na stronie używają czcionki **Forum** (serif).

---

## Hierarchia Nagłówków

### Nagłówek XL (`text-h-xl`)
- **Rozmiar**: `clamp(40px, 3rem + 2vw, 68px)`
  - Minimalny: 40px
  - Maksymalny: 68px
  - Responsywny: skaluje się płynnie między tymi wartościami
- **Grubość**: `font-normal` (400)
- **Line height**: `leading-tight` (1.25)
- **Użycie**: Główny nagłówek hero sekcji (H1)

**Przykład użycia:**
```tsx
<h1 className="font-serif text-h-xl leading-tight text-curandera-dark">
  Analiza Irydologiczna
</h1>
```

---

### Nagłówek L (`text-h-l`)
- **Rozmiar**: `clamp(32px, 2rem + 1.5vw, 48px)`
  - Minimalny: 32px
  - Maksymalny: 48px
  - Responsywny: skaluje się płynnie między tymi wartościami
- **Grubość**: `font-normal` (400), czasami `font-light` (300) dla odmian italic
- **Użycie**: Główne nagłówki sekcji (H2)

**Przykład użycia:**
```tsx
<h2 className="font-serif text-h-l text-curandera-primary">
  Oferta
</h2>
```

---

### Nagłówek M (`text-h-m`)
- **Rozmiar**: `clamp(18px, 1.2rem + 0.5vw, 24px)`
  - Minimalny: 18px
  - Maksymalny: 24px
  - Responsywny: skaluje się płynnie między tymi wartościami
- **Grubość**: `font-normal` (400)
- **Użycie**: Pytania w FAQ, mniejsze nagłówki (H3)

**Przykład użycia:**
```tsx
<h3 className="font-serif text-h-m text-curandera-secondary">
  Jak długo trwa analiza?
</h3>
```

---

## Tekst

### Tekst L (`text-body-l`)
- **Rozmiar**: `clamp(16px, 1rem + 0.5vw, 20px)`
  - Minimalny: 16px
  - Maksymalny: 20px
  - Responsywny: skaluje się płynnie między tymi wartościami
- **Grubość**: `font-normal` (400)
- **Line height**: `leading-relaxed` (1.625)
- **Użycie**: Dłuższe teksty, opisy, opinie klientów

**Przykład użycia:**
```tsx
<p className="font-sans text-body-l text-curandera-body leading-relaxed">
  Moja droga do zdrowia zawsze wiodła przez naturę...
</p>
```

---

### Tekst M (`text-body-m`)
- **Rozmiar**: `clamp(14px, 0.8rem + 0.2vw, 16px)`
  - Minimalny: 14px
  - Maksymalny: 16px
  - Responsywny: skaluje się płynnie między tymi wartościami
- **Grubość**: `font-medium` (500)
- **Użycie**: Małe etykiety, metadane, kategorii sekcji (uppercase z tracking-widest)

**Przykład użycia:**
```tsx
<span className="text-curandera-accent uppercase tracking-widest text-body-m font-medium">
  O mnie
</span>
```

---

## Domyślny rozmiar body
Na elemencie `<body>` ustawiony jest domyślny rozmiar czcionki: **text-body-l** (clamp(16px, 1rem + 0.5vw, 20px), font-normal).

---

## Kolory czcionek

- `text-curandera-dark` - #030303 (ciemny czarny)
- `text-curandera-primary` - #BE5705 (główny kolor nagłówków)
- `text-curandera-secondary` - #A30000 (drugorzędny kolor nagłówków)
- `text-curandera-body` - #363636 (kolor tekstu podstawowego)
- `text-curandera-accent` - #FBBC4E (akcent/wyróżnienie)

---

## Responsywność

Wszystkie rozmiary czcionek wykorzystują funkcję CSS `clamp()`, co oznacza płynne skalowanie między wartościami minimalnymi a maksymalnymi w zależności od szerokości viewportu. Dzięki temu nie ma potrzeby stosowania media queries - czcionki automatycznie dostosowują się do rozmiaru ekranu.

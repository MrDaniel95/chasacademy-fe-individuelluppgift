# Produktlista – Tillgänglighet & Prestandaoptimering

Detta projekt är en individuell uppgift med fokus på att förbättra tillgänglighet (WCAG 2.1 AA) och prestanda, särskilt Largest Contentful Paint (LCP), på en befintlig produktlista-sida.

Syftet med uppgiften var att:

- Identifiera tillgänglighetsproblem med axe DevTools
- Förbättra semantisk HTML-struktur
- Åtgärda kontrastproblem och saknade attribut
- Optimera LCP och kritisk rendering
- Mäta och jämföra resultat före och efter förbättringar

---

## Hur man kör projektet

1. Klona repositoryt: git clone 

2. Öppna projektmappen.

3. Starta en lokal server (t.ex. Live Server i VS Code).

4. Öppna `index.html` i webbläsaren.

---

##  Tillgänglighet

###  Före förbättringar

Mätning med axe DevTools visade:

- 23 automatiska tillgänglighetsproblem
- 4 Critical
- 19 Serious

Lighthouse Accessibility score: **65**

Identifierade problem:

- Otillräcklig färgkontrast
- Saknat `lang`-attribut på `<html>`
- Bilder utan alt-attribut
- Saknad `<main>` landmark
- Otydlig semantik

---

###  Genomförda förbättringar

- Lade till korrekt semantisk struktur (`<main>`, korrekta rubriknivåer)
- Förbättrade färgkontrast enligt WCAG 2.1 AA
- Lade till beskrivande alt-texter på bilder
- Lade till `lang="en"` på `<html>`
- Återställde synlig focus-indikator
- Ersatte icke-semantiska element med riktiga `<button>`-element

---

###  Efter förbättringar

- 0 automatiska problem i axe
- Lighthouse Accessibility score: **97**

Sidan uppfyller nu WCAG 2.1 AA enligt automatiserad testning.

---

##  Prestanda & LCP

###  Före optimering

- Performance score: **46**
- Largest Contentful Paint (LCP): **42.8 sekunder**
- Total Blocking Time: **1840 ms**

Den höga LCP-tiden berodde på:

- Blockerande JavaScript
- Ooptimerad hero-bild
- Avsaknad av prioritering av kritiska resurser

---

### Genomförda optimeringar

1. Lade till `defer` på script-taggen
2. Flyttade tung JavaScript bort från kritisk rendering
3. Optimerade hero-bilden:
- Preload
- `fetchpriority="high"`
- Satte width och height
4. Lade till `loading="lazy"` på produktbilder
5. Säkerställde att LCP-elementet laddas först

---

### Efter optimering

- Performance score förbättrades från **46 → 70**
- LCP förbättrades från **42.8 s → 2.1 s**
- CLS: **0**
- FCP: **1.3 s**

LCP förbättrades med över 95 %, vilket avsevärt förbättrar upplevd laddningstid.

---

##  Mätverktyg

### Lighthouse
Användes för att mäta:
- Accessibility score
- Performance score
- LCP, FCP, CLS, TBT

### axe DevTools
Användes för att:
- Identifiera WCAG-problem
- Verifiera förbättringar före och efter

---

## Reflektion kring upplevd prestanda

Genom att prioritera ovanför-folden-innehåll, särskilt hero-bilden, upplevs sidan som snabb även om resterande resurser laddas i bakgrunden.

Optimering av kritisk rendering har direkt påverkan på användarens upplevelse.

---

## Lärdomar

Genom detta projekt har jag lärt mig:

- Hur semantisk HTML förbättrar tillgänglighet
- Hur färgkontrast påverkar användbarhet
- Hur man identifierar och optimerar LCP
- Skillnaden mellan Lighthouse och axe
- Hur tekniska förbättringar påverkar perceived performance

---

## Sammanfattning

Projektet visar tydligt hur:

- Tillgänglighet kan förbättras systematiskt
- LCP kan reduceras drastiskt genom optimering
- Mätningar före och efter är avgörande för att visa förbättring

Sidan uppfyller nu WCAG 2.1 AA enligt automatiserad testning och har avsevärt förbättrad prestanda.
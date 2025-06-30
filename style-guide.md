# Style-Guide für TGHP Sedelmayr

## Farbpalette
| Farbcode       | Anwendungsbereich                                 |
|----------------|---------------------------------------------------|
| #f5faff      | Seitenhintergrund (body)                          |
| #d0e7ff      | Navigation, Buttons (Hintergrund)                 |
| #a0c4ff      | Akzent, Button-Border, Gradient                   |
| #0d47a1      | Gradient, Überschriften                           |
| #003366      | Navigationstext, Überschriften, starke Akzente    |
| #004b7c      | Navigation, Überschriften, Links                  |
| #4aa3df      | Akzent, Border, Hinweisbox                        |
| #e6f3ff      | Box-Hintergrund, Submenüs, Textboxen              |
| #e9f3ff      | Angebotsbereiche, Pflegekinder-Bereiche           |
| #b9dbff      | Hover-Effekt, Gradient                            |
| #f0f8ff      | Hinweisbox (angebot-hinweis)                      |
| #aacce5      | Abschlusslinie (angebot-abschluss)                |
| #d3e8f7      | Box-Border (abschnitt-box)                        |
| #f7fbff      | Box-Hintergrund (abschnitt-box)                   |

## Basis-Layout
- `.container`: Zentriert den Inhalt, max. Breite 900px.
- `body`: Grundschrift, Hintergrundfarbe, Textfarbe.

## Navigation
- `.nav-container`: Flex-Layout für Logo und Menü.
- `.nav-logo`: Logo und Name, immer links.
- `.nav-menu`: Hauptmenü, horizontale Liste.
- `.has-submenu .submenu`: Dropdown-Menü für Unterpunkte.
- `.nav-toggle`: Hamburger-Menü für Mobilansicht.

## Landing-Page
- `.landing-header`: Header-Bereich mit Logo und Titel.
- `.landing-logo`: Großes Logo zentriert.
- `.landing-subtitle`: Untertitel unter dem Haupttitel.

## Was-ist-Seite
- (Platzhalter für zukünftige spezifische Klassen)

## Über-mich-Seiten
- `.vision-mission-page-gradient`: Farbverlauf-Hintergrund.
- `.align-image`: Bildausrichtung für Vision/Mission.
- `.arbeitsweise-einleitung`, `.arbeitsweise-block`: Einleitungstexte.
- `.arbeitsweise-link`: Verlinkte Begriffe im Fließtext.
- `.arbeitsweise-flexblock`: Flex-Layout mit Bild/Text.
- `.arbeitsweise-zweispaltig`: Zweispaltiges Layout.
- `.arbeitsweise-angebot`: Zentrale Angebotsbox.

## Angebots-Seiten
- `.angebot-bereich`: Box für Angebotsabschnitte.
- `.angebot-liste`: Liste von Angebotspunkten.
- `.angebot-punkt`: Einzelner Angebotspunkt.
- `.angebot-untertitel`: Untertitel für Angebotsbereiche.
- `.angebot-unterpunkte`: Unterpunkte zu einem Angebotspunkt.
- `.angebot-hinweis`: Hinweisbox.
- `.angebot-abschluss`: Abschlussabschnitt.
- `.angebot-intro`: Einleitungstext für Angebote.
- `.pflegekinder-bereiche`, `.pflegekinder-bereich`: Layout für Pflegekinder-Angebote.

## Buttons & Utilities
- `.angebot-button`: Großer, klickbarer Button.
- `.abschnitt-box`: Abgesetzte Box für Abschnitte.
- `.text-box`: Info-Box mit farbigem Rand.

## Responsive
- Media Queries für max-width: 768px und 480px, jeweils für Navigation, Flex-Layouts und Angebotsbereiche.

---

**Beispiel-HTML für einen Angebotsbereich:**
```html
<div class="angebot-bereich">
  <h2 class="angebot-untertitel">Mein Angebot</h2>
  <div class="angebot-liste">
    <p class="angebot-punkt"><strong>Beratung:</strong> Individuelle Unterstützung ...</p>
    <div class="angebot-unterpunkte">
      <ul>
        <li>Unterpunkt 1</li>
        <li>Unterpunkt 2</li>
      </ul>
    </div>
  </div>
</div>
``` 
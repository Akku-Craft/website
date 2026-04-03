# Hardware-Design & Schaltpläne

Das elektrische Fundament von Akku-Craft basiert auf Zuverlässigkeit und Modularität. Unsere Schaltpläne sind darauf ausgelegt, hohe Ströme zu bewältigen und gleichzeitig eine präzise Überwachung jedes einzelnen Zellstrangs zu ermöglichen.

## Grundlegende Designprinzipien

Jedes Modul ist dafür ausgelegt, als Teil eines größeren Netzwerks zu funktionieren — nicht nur um Batterien zu verbinden.

| Merkmal              | Beschreibung                                                                  |
| -------------------- | ----------------------------------------------------------------------------- |
| Spannungsüberwachung | Hochpräzise Messung für einzelne Zellgruppen.                                 |
| Balancing            | Aktive oder passive Balancingschaltungen zur Maximierung der Zelllebensdauer. |
| Schutz               | Integrierte Sicherungen und MOSFET-basierte Trennschalter.                    |

![Hauptplatinen-Schaltplan](/wiki/schaltplan.png)

> **Hinweis:** Dieses Bild entspricht möglicherweise nicht der neuesten Revision. Aktuelle Dateien sind im Repository `schematics` zu finden.

## Repository-Struktur

Hardware-Dateien werden im Repository `schematics` gehostet. Wir verwenden branchenübliche Werkzeuge, damit jeder unsere Designs prüfen oder dazu beitragen kann.

## Sicherheitshinweise

Die Arbeit mit Lithium-Ionen-Akkus birgt echte Risiken. Bitte beachte folgende Vorsichtsmaßnahmen:

- Vor dem Anschließen von Modulen stets die Polarität prüfen.
- Beim ersten Testlauf einer neuen Platine die Strombegrenzung am Labornetzgerät aktivieren.
- Beim Testen ungeprüfter Hardware stets einen feuerfesten Behälter in der Nähe haben.
